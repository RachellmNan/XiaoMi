<template>
    <div class="product">
        this is {{id}}
    </div>
</template>

<script>
export default {
    name:'Product',
    data(){
        return {
            id:''
        }
    },
    mounted(){
        console.dir(this.$route)
        this.id = this.$route.params.id
    }
}
</script>

<style lang="scss">

</style>