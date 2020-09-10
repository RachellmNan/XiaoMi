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
            title:'确认订单',
            desc:'',
            path : this.$route.path
        }
    },
    watch:{
        '$route'(to){
            this.path = to.path
        },
        path(val){
            this.changeText(val)
        }
    },
    methods:{
        changeText(path){
            if(path.indexOf('pay')>-1){
                this.title = '支付订单'
                this.desc  = '请谨防钓鱼链接或诈骗电话'
            }else if(path.indexOf('confirm')>-1){
                this.title = '确认订单'
                this.desc  = ''
            }else if(path.indexOf('list')>-1){
                this.title = '订单列表'
                this.desc  = '请谨防钓鱼链接或诈骗电话'
            }
        }
    },
    mounted(){
        this.changeText(this.path)
    }
}
</script>

<style lang="scss">

</style>