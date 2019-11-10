import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
    {
        path: '',
        component: bottom,
        redirect: '/home',
        children: [{
            path: 'home',
            name: 'home',
            component: () => import('../views/boottom'),
            meta: {title: '首页', icon: 'home'}
        }]
    },
]
