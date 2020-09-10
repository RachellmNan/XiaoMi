<template>
    <div class="NavHeader">
        <div class="topbar-nav">
            <div class="container">
                <div class="nav-option">
                    <a href="javascript:;">小米商城</a><span>|</span>
                    <a href="javascript:;">MIUI</a><span>|</span>
                    <a href="javascript:;">loT</a><span>|</span>
                    <a href="javascript:;">云服务</a><span>|</span>
                    <a href="javascript:;">金融</a><span>|</span>
                    <a href="javascript:;">有品</a><span>|</span>
                    <a href="javascript:;">小爱开放平台</a><span>|</span>
                    <a href="javascript:;">企业团购</a><span>|</span>
                    <a href="javascript:;">资质证照</a><span>|</span>
                    <a href="javascript:;">协议规则</a><span>|</span>
                    <a href="javascript:;">下载app</a><span>|</span>
                    <a href="javascript:;">Select Location</a>
                </div>
                <div class="user-menu">
                    <a href="javascript:;" v-if="username != ''" class="username">{{username}}</a>
                    <a href="" v-if="username != ''" @click="logout">退出登录</a>
                    <a href="/#/login" class="user-wrapper" v-if="username == ''">登录<span class="iconfont">&#xe687;</span></a><span>|</span>
                    <a href="javascript:;">消息通知</a><span>|</span>
                    <a href="javascript:;" @click="goOrderList">我的订单</a><span class="iconfont">&#xe687;</span>
                    <a href="javascript:;" class="cart" @click="goCart"><span class="cart-icon iconfont" >&#xe610;</span>购物车（{{cartCount}}）</a>
                </div>
            </div>
        </div>
        <div class="topbar-menu">
            <div class="container">
                <div class="icon-menu">
                    <a href="/#/index">
                        <transition name="fade">
                            <span class="icon-show"></span>
                        </transition>
                    </a>
                </div>
                <div class="goods-menu">
                    <div class="menu-wrapper">
                        <span class="title">小米手机</span>
                        <div class="goods-list">
                            <ul class="goods-detail" >
                                <li class='product' v-for="item of ProductList" :key="item.id">
                                    <a href="">
                                        <div class="img-wrapper">
                                            <img :src="item.mainImage">
                                        </div>
                                        <p>{{item.name}}</p>
                                        <p class="price">{{item.price}} 元</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">Redmi 红米</span>
                        <div class="goods-list">
                            <ul class="goods-detail" >
                                <li class='product' v-for="item of RedMiList" :key="item.id">
                                    <a href="">
                                        <div class="img-wrapper">
                                            <img :src="item.mainImage">
                                        </div>
                                        <p>{{item.name}}</p>
                                        <p class="price">{{item.price}} 元</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">电视</span>
                        <div class="goods-list">
                            <ul class="goods-detail" >
                                <li class='product' v-for="item of TvList" :key="item.id">
                                    <a href="">
                                        <div class="img-wrapper">
                                            <img :src="item.mainImage">
                                        </div>
                                        <p>{{item.name}}</p>
                                        <p class="price">{{item.price}} 元</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">笔记本</span>
                        <div class="goods-list">
                            <ul class="goods-detail" >
                                <li class='product' v-for="item of PcList" :key="item.id">
                                    <a href="">
                                        <div class="img-wrapper">
                                            <img :src="item.mainImage">
                                        </div>
                                        <p>{{item.name}}</p>
                                        <p class="price">{{item.price}} 元</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">家电</span>
                        <div class="goods-list">
                            <ul class="goods-detail" >
                                <li class='product' v-for="item of MaList" :key="item.id">
                                    <a href="">
                                        <div class="img-wrapper">
                                            <img :src="item.mainImage">
                                        </div>
                                        <p>{{item.name}}</p>
                                        <p class="price">{{item.price}} 元</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">路由器</span>
                        <div class="goods-list">
                            <ul class="goods-detail" >
                                <li class='product' v-for="item of RouterList" :key="item.id">
                                    <a href="">
                                        <div class="img-wrapper">
                                            <img :src="item.mainImage">
                                        </div>
                                        <p>{{item.name}}</p>
                                        <p class="price">{{item.price}} 元</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">智能硬件</span>
                        <div class="goods-list">
                            <ul class="goods-detail" >
                                <li class='product' v-for="item of AiList" :key="item.id">
                                    <a href="">
                                        <div class="img-wrapper">
                                            <img :src="item.mainImage">
                                        </div>
                                        <p>{{item.name}}</p>
                                        <p class="price">{{item.price}} 元</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">服务</span>
                    </div>
                    <div class="menu-wrapper">
                        <span class="title">社区</span>
                    </div>
                    
                </div>
                <div class="search">
                    <input type="text" placeholder="手机">
                    <div href="javascript:;" class="iconfont">
                        <span>&#xe650;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapState } from 'vuex';
export default {
    name:'NavHeader',
    data(){
        return {
            show:true,
            ProductList:[],
            RedMiList:[{id:0,mainImage:'/imgs/RedMi/1.png',name:"Redmi 9",price:799},{id:1,mainImage:'/imgs/RedMi/2.png',name:"Redmi 10X 4G",price:999},{id:2,mainImage:'/imgs/RedMi/3.png',name:"Redmi 10X",price:1599},{id:3,mainImage:'/imgs/RedMi/4.png',name:"Redmi K30 Pro",price:2499},{id:4,mainImage:'/imgs/RedMi/5.png',name:"Redmi K30 Prp 变焦版",price:3399},{id:5,mainImage:'/imgs/RedMi/6.png',name:"Redmi K30",price:1399}],
            TvList:[{id:0,mainImage:'/imgs/TV/1.png',name:"小米电视 大师 65英寸OLED",price:12999},{id:1,mainImage:'/imgs/TV/2.png',name:"Redmi 智能电视 MAX 98''",price:19999},{id:2,mainImage:'/imgs/TV/3.png',name:"小米电视4A 60英寸",price:1999},{id:3,mainImage:'/imgs/TV/4.png',name:"Redmi 智能电视 X55",price:2199},{id:4,mainImage:'/imgs/TV/5.png',name:"Redmi 红米电视 70英寸 R70A",price:2999},{id:5,mainImage:'/imgs/TV/6.png',name:"小米壁画电视 65英寸",price:6999}],
            PcList:[{id:0,mainImage:'/imgs/PC/1.png',name:"RedmiBook 16",price:4999},{id:1,mainImage:'/imgs/PC/2.png',name:"RedmiBook 14 Ⅱ",price:4699},{id:2,mainImage:'/imgs/PC/3.png',name:"Pro 15.6 2020款",price:5999},{id:3,mainImage:'/imgs/PC/4.png',name:"小米笔记本Air 13.3",price:5699},{id:4,mainImage:'/imgs/PC/5.png',name:"小米游戏本",price:6499},{id:5,mainImage:'/imgs/PC/6.png',name:"显示器",price:2399}],
            MaList:[{id:0,mainImage:'/imgs/Machine/1.png',name:"米家互联网空调C1（一级能效）",price:1999},{id:1,mainImage:'/imgs/Machine/2.png',name:"米家互联网空调（一级能效）",price:1999},{id:2,mainImage:'/imgs/Machine/3.png',name:"Redmi全自动波轮洗衣机1A",price:799},{id:3,mainImage:'/imgs/Machine/4.png',name:"米家互联网洗烘一体机10kg",price:2199},{id:4,mainImage:'/imgs/Machine/5.png',name:"米家风冷对开门冰箱 483L",price:2288},{id:5,mainImage:'/imgs/Machine/6.png',name:"米家两门冰箱 160L",price:929}],
            RouterList:[{id:0,mainImage:'/imgs/Router/1.png',name:"Redmi路由器 AX5",price:249},{id:1,mainImage:'/imgs/Router/2.png',name:"小米路由器 AX1800",price:329},{id:2,mainImage:'/imgs/Router/3.png',name:"小米AIoT路由器AX3600",price:599},{id:3,mainImage:'/imgs/Router/4.png',name:"Redmi路由器AC2100",price:169},{id:4,mainImage:'/imgs/Router/5.png',name:"小米路由器AC2100",price:229},{id:5,mainImage:'/imgs/Router/6.png',name:"小米路由器 Mesh",price:999}],
            AiList:[{id:0,mainImage:'/imgs/AI/1.png',name:"小米米家智能摄像机云台版",price:189},{id:1,mainImage:'/imgs/AI/2.png',name:"小米小爱老师",price:399},{id:2,mainImage:'/imgs/AI/3.png',name:"小米米家智能门锁",price:1299},{id:3,mainImage:'/imgs/AI/4.png',name:"Redmi小爱触屏音箱 8",price:349},{id:4,mainImage:'/imgs/AI/5.png',name:"小米小爱触屏音箱",price:199},{id:5,mainImage:'/imgs/AI/6.png',name:"Redmi小爱音箱 Play",price:79}]
        }
    },
    methods:{
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:100012,
                    pageSize:6
                }
            }).then((res)=>{
                this.ProductList = res.list.slice(0,6)
            })
        },
        goCart(){
            this.$router.push('/cart')
        },
        logout(){
            try {
                this.axios.post('/user/logout').then(()=>{
                    this.$message.success('退出成功')
                    this.$cookie.set('userId','',{expires:'-1'})
                    this.$store.dispatch('saveUserName','')
                    this.$store.dispatch('saveCartCount',0)
                })
            } catch (error) {
                console.log(error)
            }  
        },
        goOrderList(){
            this.$router.push('/order/list')
        }
    },
    computed:{
        username (){
            return this.$store.state.username
        },
        cartCount(){
            return this.$store.state.cartCount
        }
        // ...mapState(['username'])
    },
    mounted(){
        this.getProductList()
    }
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
@import '../assets/scss/mixins.scss';
    .NavHeader{
        .topbar-nav{
            background-color: #333;
            .container{
                min-width: 1226px;
                margin: auto;
                width: 1226px;
                height: 40px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                a{
                    color: $colorB;
                    font-size: 12px;
                }
                span{
                    margin: 0 .3em;
                    color: #424242;
                }
                .user-menu{
                    line-height: 40px;
                    .username{
                        margin-right: 12px;
                    }
                    .iconfont{
                        display: inline-block;
                        width: 20px;
                        font-size: 16   px;
                        color: $colorB;
                        line-height: 20px;
                        vertical-align: middle;
                        cursor: pointer;
                    }
                    .cart{
                        text-align: center;
                        display: inline-block;
                        background-color: rgb(66, 66, 66);
                        width: 120px;
                        height: 40px;
                        &:hover{
                            background-color: #fff;
                            color: #ff6700;
                            .iconfont{
                                color: #ff6700;
                            }
                        }
                        .iconfont{
                            display: inline-block;
                            line-height: 40px;
                            font-size: 16px;
                            font-weight: 800;
                            // vertical-align: middle;
                        }
                    }
                }
                
            }
        }
        .topbar-menu{
            .container{
                margin: auto;
                width: 1226px;
                line-height: 100px;
                height: 100px;
            }
            .icon-menu{
                display: inline-block;
                vertical-align: middle;
                height: 55px;
                a{
                    width: 55px;
                    height: 55px;
                    display: inline-block;
                    background-color: $colorA;
                    overflow: hidden;
                    .icon-show{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        transition: margin 0.5s;
                        &::before{
                            @include fakeImg(55px,55px,"/imgs/logo-mi.png");
                            
                        }
                        &::after{
                            @include fakeImg(55px,55px,"/imgs/mi-home.png");
                        }
                        &:hover{
                            margin-left: -55px;
                            transition: margin 0.5s;
                        }
                    }
                    // .fade-enter-active,.fade-leave-active{
                    //     transition: margin 1s;
                    // }
                    // .fade-enter,.fade-leave-to{
                    //     margin-left: 55px;
                    // }
                }
            }
            .goods-menu{
                display: inline-block;
                text-align: center;
                width: 850px;
                line-height: 90px;
                height: 100px;
                margin-left: 30px;
                .menu-wrapper{
                    display: inline-block;
                    .title{
                        display: inline-block;
                        font-size: 16px;
                        padding: 0px 10px;
                        cursor: pointer;
                    }
                    &:hover{
                        span{
                            color: $colorA;
                        }
                        .goods-list{
                            opacity: 1;
                            height: 250px;
                            transition: all 0.5s;
                        }
                    }
                }
                .goods-list{
                    position: absolute;
                    z-index: 10;
                    border: 1px solid #E5E5E5;
                    box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                    background-color: white;
                    left: 0px;
                    min-width: 1226px;
                    width: 100vw;
                    height: 0px;
                    overflow: hidden;
                    opacity: 0;
                    transition: all 0.5s;
                    .goods-detail{
                        display: inline-block;
                        text-align: center;
                        min-width: 1226px;
                        li{
                            display: inline-block;
                            position: relative;
                            a{
                                color: #333;
                                .price{
                                    color: $colorA;
                                }
                            }
                            &:last-child::after{
                                display: none;
                            }
                            &::after{
                                content: '';
                                display: block;
                                position: absolute;
                                top: 50px;
                                height: 95px;
                                right: 0px;
                                border-right: 1px solid #D7D7D7;
                            }
                        }
                        .img-wrapper{
                            display: inline-block;
                            position: relative;
                            img{
                                width: 160px;
                                height: 110px;
                                margin-top: 40px;
                                margin-right: 30px;
                            }
                        }
                        p{
                            line-height: 20px;
                        }
                    }
                }
            }
            .search{
                display: inline-block;
                input{
                    height: 48px;
                    width: 223px;
                    padding-left: 10px;
                    border:1px solid #e0e0e0;
                    vertical-align: middle;
                }
                .iconfont{
                    display: inline-block;
                    height: 48px;
                    width: 38px;
                    line-height: 48px;
                    border:1px solid #e0e0e0;
                    vertical-align: middle;
                    span{
                        font-size: 20px;
                        margin-left: 5px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>