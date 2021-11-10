import {createApp} from 'vue'
import App from './App.vue'
import './index.scss'
import {createRouter, createWebHashHistory} from 'vue-router'
import Home from "./views/home.vue"
import Doc from "./views/doc.vue"
import SwitchDemo from'./components/switchDemo.vue'
import ButtonDemo from'./components/buttonDemo.vue'
import DialogDemo from'./components/dialogDemo.vue'
import TabDemo from'./components/tabDemo.vue'
const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc,children:[
                {path:'switch',component:SwitchDemo},
                {path:'button',component:ButtonDemo},
                {path:'dialog',component:DialogDemo},
                {path:'tabs',component:TabDemo},
            ]}
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')