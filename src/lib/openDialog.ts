import Dialog from "./dialog.vue";
import {createApp, h} from "vue";

export const openDialog = (options) => {
    const {title, content, ok, cancel, closeOnClickOverlay} = options;
    const div = document.createElement("div");
    document.body.appendChild(div);
    const close = () => {
        app.unmount();
        div.remove();
    };
    const app = createApp(
        h(
            Dialog,
            {
                visible: true,
                "onUpdate:visible": (newVisible) => {
                    if (newVisible === false) {
                        close();
                    }
                },
                ok, cancel, closeOnClickOverlay: closeOnClickOverlay.value
            },
            {
                title,
                content,
            }
        )
    );
    app.mount(div);
};

