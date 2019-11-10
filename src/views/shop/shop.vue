<template>
        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div class="bg-white py-2 collapse-inner rounded">
                <h6 class="collapse-header">商品信息</h6>
                <a class="collapse-item" @click="shopClick('listShop')">商品列表</a>
                <a class="collapse-item" @click="shopClick('addShop')">添加商品</a>
                <a class="collapse-item" @click="shopClick('classifyShop')">商品分类</a>
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
                this.$emit("shopClick", data);

                // this.$router.push()//可以返回
            }
        }
    }
</script>

<style scoped>

</style>
