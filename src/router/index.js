import Vue from 'vue'
import Router from 'vue-router'

// 1.安装VueRouter
Vue.use(Router)
//2.配置路由信息
const Dashboard = () => import('../components/Dashboard')
const ShopList = () => import('../views/shop/shopList')
const ShopAdd = () => import('../views/shop/shopAdd')
const MusicHome = () => import('../views/music/musicHome')




export const routes = [
    {
        path: '/',
        name: Dashboard,
        component: Dashboard,
    },
    {
        path: '/index',
        name: Dashboard,
        component: Dashboard,
    },
    {
        path: '/shopList',
        name: ShopList,
        component: ShopList,
    }, {
        path: '/shopAdd',
        name: ShopAdd,
        component: ShopAdd,
    },
    , {
        path: '/musicHome',
        name: MusicHome,
        component: MusicHome,
    },

]
// 3.创建路由对象
const router = new Router({
    mode: 'history',
    routes,

})

// 4.导出
export default router
