import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import Lgp from './components/lgp.vue'
import Lgp2 from './components/lgp2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Lgp},
        {path: '/xxx', component: Lgp2}
    ]
})


const app = createApp(App)
app.use(router)
app.mount('#app')