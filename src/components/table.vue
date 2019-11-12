<template>
    <div>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
               aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-laugh-wink"></i>
                <span>商品</span>
            </a>
            <Shop></Shop>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
               aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-laugh-wink"></i>
                <span>订单</span>
            </a>
            <Order></Order>
        </li>
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#music"
               aria-expanded="true" aria-controls="music">
                <i class="fas fa-fw fa-laugh-wink"></i>
                <span>音乐</span>
                <Music></Music>
            </a>
        </li>
    </div>
</template>

<script>
    import Order from '../views/order/order'
    import Shop from '../views/shop/shop'
    import Music from '../views/music/music'
    export default {
        name: "Table",
        components: {
            Order,
            Shop,
            Music
        },
    }
</script>

<style scoped>

</style>
