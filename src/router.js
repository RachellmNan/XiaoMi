import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home.vue'
import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Login from './pages/login.vue'
import Detail from './pages/detail.vue'
import Cart from './pages/cart.vue'
import Order from './pages/order.vue'
// import Confirm from './pages/confirm.vue'
import Pay from './pages/pay.vue'
import OrderList from './pages/orderList.vue'
import Register from './pages/register.vue'

Vue.use(Router)

export default new Router({
    routes:[{
        path:'/',
        name:'home',
        component:Home,
        redirect:'/index',
        children:[{
            path:'index',
            name:'index',
            component:Index
        },{
            path:'product/:id',
            name:'product',
            component:Product
        },{
            path:'detail/:id',
            name:'detail',
            component:Detail
        }]
    },{
        path:'/login',
        name:'login',
        component:Login
    },{
        path:'/register',
        name:'register',
        component:Register
    },{
        path:'/cart',
        name:'cart',
        component:Cart
    },{
        path:'/order',
        name:'order',
        component:Order,
        meta:'order',
        // redirect:'/order/list',
        children:[{
            path:'confirm',
            name:'confirm',
            component:()=>import('./pages/confirm.vue'),
            meta:'confirm',
        },{
            path:'pay',
            name:'pay',
            component:Pay,
            meta:'pay'
        },{
            path:'/order/List',
            name:'OrderList',
            component:OrderList,
            meta:'list'
        }]
    }],
    
    // scrollBehavior (to, from, savedPosition) {
    //     console.log(to,from,savedPosition)
    //     return { x: 0, y: 40 }
    //   }
})