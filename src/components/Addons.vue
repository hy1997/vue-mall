<template>
    <!-- Heading -->
    <div>
        <div class="sidebar-heading">
            Addons
        </div>
        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
               aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Pages</span>
            </a>
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages"
                 data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Login Screens:</h6>
                    <a class="collapse-item"
                       href="../../../../Downloads/startbootstrap-sb-admin-2-gh-pages/login.html">Login</a>
                    <a class="collapse-item"
                       href="../../../../Downloads/startbootstrap-sb-admin-2-gh-pages/register.html">Register</a>
                    <a class="collapse-item"
                       href="../../../../Downloads/startbootstrap-sb-admin-2-gh-pages/forgot-password.html">Forgot
                        Password</a>
                    <div class="collapse-divider"></div>
                    <h6 class="collapse-header">Other Pages:</h6>
                    <a class="collapse-item"
                       href="../../../../Downloads/startbootstrap-sb-admin-2-gh-pages/404.html">404 Page</a>
                    <a class="collapse-item"
                       href="../../../../Downloads/startbootstrap-sb-admin-2-gh-pages/blank.html">Blank Page</a>
                </div>
            </div>
        </li>
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
    </div>
</template>

<script>
    export default {
        name: "Addons"
    }
</script>

<style scoped>

</style>
