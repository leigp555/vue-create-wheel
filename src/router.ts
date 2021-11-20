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

// @ts-ignore
import introMd from './markdown/intro.md'
// @ts-ignore
import installMd from './markdown/install.md'
// @ts-ignore
import getStartedMd from './markdown/get-started.md'
const render=(string)=>{
    return h(Markdown,{content:string,key:string})
}
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[
                {path:'',component:render(introMd)},
                {path:'intro',component:render(introMd)},
                {path:'install',component:render(installMd)},
                {path:'get-started',component:render(getStartedMd)},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabDemo},
                {path:'popup',component:PopUp},
            ]}
    ]
})