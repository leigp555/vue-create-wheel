import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import "github-markdown-css"
import {router} from "./router.ts"
import markdown from './view/md.vue'

const app = createApp(App)
app.component("Markdown", markdown)
app.use(router)
app.mount('#app')