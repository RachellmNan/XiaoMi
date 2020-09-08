<template>
    <div class="order">
        <order-header>
            <template v-slot:title>
                <h2>{{title}}</h2>
                <p>{{desc}}</p>
            </template>
        </order-header>
        <router-view></router-view>
         <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
    name:"order",
    components:{
        OrderHeader,
        NavFooter
    },
    data(){
        return {
            title:'',
            desc:''
        }
    },
    mounted(){
        if(this.$route.path.indexOf('confirm')){
            this.title = '确认订单'
            this.desc  = ''
        }
    }
}
</script>

<style lang="scss">

</style>