<template>
    <div class="app">
        <Index/>
    </div>
</template>

<script>

    import Index from './views/index/index'
    export default {
        name: 'app',
        components: {
            Index
        }

    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    @import './assets/vendor/fontawesome-free/css/all.min.css';
    /*引入公共样式*/
    @import 'https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i';
    /*引入公共样式*/
    @import './assets/css/sb-admin-2.min.css'; /*引入公共样式*/
</style>
