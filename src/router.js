import Vue from 'vue'
import Router from 'vue-router'
import allNotePage from './components/page/AllNotePage.vue'
import Home  from './components/page/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/allnotepage',
            name: 'allNotePage',
            component: allNotePage
        }
    ]
})