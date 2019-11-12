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

                <li class="nav-item active">
                    <a class="nav-link" href="/index">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>首页</span></a>
                </li>
                <!-- 分割线 -->
                <hr class="sidebar-divider">
                <!--菜单列表-->
                <Table  v-on:ListenChild="ShowChild" />

                <Addons/>
            </ul>
            <div id="content-wrapper" class="d-flex flex-column">
                <Topbar></Topbar>
                <router-view></router-view>
                 <Footer/>
            </div>
        </div>
    </div>
</template>

<script>
    import Table from '../../components/table'
    import Addons from '../../components/Addons'
    import Topbar from '../../components/topbar'
    import Footer from '../index/footer'

    export default {
        name: "index",
        components: {
            Table,
            Addons,
            Topbar,
            Footer
        },

        methods: {
            ShowChild: function (data) {
                this.data = data
                console.log("data:" + data)
            }
        }
    }

</script>

<style scoped>



</style>
