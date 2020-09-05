<template>
    <div class="product">
        <product-param></product-param>
        <p class="test">test</p>
        <p class="test">test</p>
        <p class="test">test</p>
        <p class="test">test</p>
        <p class="test">test</p>
    </div>
</template>

<script>
import ProductParam from '../components/ProductParam'
export default {
    name:'Product',
    components:{
        ProductParam
    },
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
    .test{
        height: 150px;
    }
</style>