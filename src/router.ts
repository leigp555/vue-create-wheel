import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './view/home.vue'
import Doc from './view/doc.vue'
import SwitchDemo from'./components/switchDemo.vue'
import ButtonDemo from'./components/buttonDemo.vue'
import DialogDemo from'./components/dialogDemo.vue'
import TabDemo from'./components/tabDemo.vue'
import Intro from "./view/intro.vue"
import Install from "./view/install.vue"
import Start from "./view/start.vue"
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[
                {path:'',component:Intro},
                {path:'intro',component:Intro},
                {path:'install',component:Install},
                {path:'get-started',component:Start},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabDemo},
            ]}
    ]
})
