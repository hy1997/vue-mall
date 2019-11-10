<template>
    <!-- Page Wrapper -->
    <div>
        <div id="wrapper">
            <!-- Sidebar -->
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <!-- Sidebar - Brand -->
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                        <i class="fas fa-laugh-wink"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">哈哈</div>
                </a>
                <!-- 分割线 -->
                <hr class="sidebar-divider my-0">
                <!-- Nav Item - Dashboard -->
                <li class="nav-item active">
                    <a class="nav-link" href="/index">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>首页</span></a>
                </li>
                <!-- 分割线 -->
                <hr class="sidebar-divider">
                <!--菜单列表-->
                <Table/>

                <!-- Divider -->
                <hr class="sidebar-divider">

                <!-- Nav Item - Charts -->
                <li class="nav-item">
                    <a class="nav-link" href="../../../../Downloads/startbootstrap-sb-admin-2-gh-pages/charts.html">
                        <i class="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>
                <!-- Nav Item - Tables -->
                <li class="nav-item">
                    <a class="nav-link" href="../../../../Downloads/startbootstrap-sb-admin-2-gh-pages/tables.html">
                        <i class="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>
                <!-- Divider -->
                <hr class="sidebar-divider d-none d-md-block">
                <!-- Sidebar Toggler (Sidebar) -->
                <div class="text-center d-none d-md-inline">
                    <button class="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
            <!-- End of Sidebar -->
            <Addons></Addons>
            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">
                <!-- Main Content -->
                   <!--上导航栏-->
                <Topbar></Topbar>
                <!--右边页面vue组件-->
                    <Dashboard/>
                <!-- 底部内容 -->
                    <Footer/>
            </div>
        </div>
        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

    </div>
</template>

<script>
    import Dashboard from '../../views/Dashboard.vue'
    import Footer from './footer.vue'
    import Table from '../table'
    import Topbar from '../topbar'
    import Addons from '../Addons'
    export default {
        name: "index",
        components: {
            Dashboard,
            Footer,
            Table,
            Topbar,
            Addons

        },

        methods: {
            childClick: function(data) {
                // childValue就是子组件传过来的值
                alert(data)
                if('listShop'==data.message){
                    this.shopList=true;
                }
            }
        }
    }

</script>

<style scoped>

    @import '../../assets/vendor/fontawesome-free/css/all.min.css';
    /*引入公共样式*/
    @import 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i';
    /*引入公共样式*/
    @import '../../assets/css/sb-admin-2.min.css'; /*引入公共样式*/

</style>
