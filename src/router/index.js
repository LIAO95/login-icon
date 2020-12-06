import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

import Login from '@/views/login.vue'
import Index from '@/views/index.vue'

export default new Router({
    routes: [
        {
            path: '/login',
            component: Login
        },
        {
            path: '/',
            component: Index
        },
    ]
})