import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './view/home.vue'
import Doc from './view/doc.vue'
import SwitchDemo from'./components/switchDemo.vue'
import ButtonDemo from'./components/buttonDemo.vue'
import DialogDemo from'./components/dialogDemo.vue'
import TabDemo from'./components/tabDemo.vue'
import PopUp from "./components/popupDemo.vue"
import {h} from "vue";
import Markdown from './view/md.vue'
const render=(path)=>{
    return h(Markdown,{path:`../markdown/${path}`,key:path})
}
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[
                {path:'',component:render("intro.md")},
                {path:'intro',component:render("intro.md")},
                {path:'install',component:render("install.md")},
                {path:'get-started',component:render("get-started.md")},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabDemo},
                {path:'popup',component:PopUp},
            ]}
    ]
})