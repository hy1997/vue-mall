import Vue from 'vue'
import Router from 'vue-router'

// 1.安装VueRouter
Vue.use(Router)
//2.配置路由信息
const Index = () => import('../views/index/index')

export const routes = [
    {
        path: '/',
        name: Index,
        component: Index,
    },
    {
        path: '/index',
        name: Index,
        component: Index,
    },
]
// 3.创建路由对象
const router = new Router({
    mode: 'history',
    routes,

})

// 4.导出
export default router
