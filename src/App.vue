<template>
<!--    <componentBottom/>-->
    <index/>
</template>

<script>
    import componentBottom from './views/componentBottom.vue'
    import index from './views/index/index.vue'

    export default {
        name: 'app',
        components: {
            componentBottom,
            index
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
</style>
