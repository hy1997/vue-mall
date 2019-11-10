<template>
    <div>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
               aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-laugh-wink"></i>
                <span>商品</span>
            </a>
            <!--商品信息-->
            <Shop></Shop>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
               aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-laugh-wink"></i>
                <span>订单</span>
            </a>
            <!--order-->
            <order-list></order-list>
        </li>
    </div>
</template>

<script>
    import OrderList from './order/orderList'
    import Shop from './shop/shop'

    export default {
        name: "Table",
        components: {
            OrderList,
            Shop,
        },
    }
</script>

<style scoped>

</style>
