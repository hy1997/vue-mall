<template>



</template>

<script>
    export default {

            name: "musicTable",
            // 这里是传入的数据
            props: {
                resSongs:Array
            },

        data() {
            return {
                sresSongs:[],
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            }
        }
    }



</script>

