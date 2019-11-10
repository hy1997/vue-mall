<template>
    <div>
        <div class="bottom-icon">
            <slot name="icon"></slot>
        </div>
        <div class="bottom-name">
            <slot name="name"></slot>
        </div>
        <div >
            <div class="row">
                <div class="col-md-6">
                    <button class="btn btn-primary">测试按钮</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
    .bottom-icon img {
        width: 20%;
        height: 20%;
    }

    .bottom-name  span{
        padding-left: 20px;
    }


</style>
