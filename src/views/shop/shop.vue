<template>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">商品信息</h6>
                <router-link class="collapse-item" to="/shopList">商品列表</router-link>
                <router-link class="collapse-item" to="/shopAdd">商品列表</router-link>
            </div>
        </div>
</template>

<script>
    export default {
        name: "Shop",
        methods: {
            shopClick(data) {
                // shopClick是在父组件on监听的方法
                // 第二个参数this.childValue是需要传的值
                this.$emit("ListenChild", data);

                // this.$router.push()//可以返回
            }
        }
    }
</script>

<style scoped>

</style>
