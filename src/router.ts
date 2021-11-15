import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './view/home.vue'
import Doc from './view/doc.vue'
import SwitchDemo from'./components/switchDemo.vue'
import ButtonDemo from'./components/buttonDemo.vue'
import DialogDemo from'./components/dialogDemo.vue'
import TabDemo from'./components/tabDemo.vue'
const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[
                {path:'',component:SwitchDemo},
                {path:'intro',component:SwitchDemo},
                {path:'install',component:SwitchDemo},
                {path:'get-started',component:SwitchDemo},
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabDemo},
            ]}
    ]
})
