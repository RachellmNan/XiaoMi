<template>
    <div class="detail">
        <product-param :title="product.name" :showButton="parseInt(0)"></product-param>
        <NavSlide></NavSlide>
        <div class="product-wrapper">
            <div class="left">
                <swiper :options="swiperOptions">
                    <swiper-slide><img src="/imgs/detail/0.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/detail/1.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/detail/2.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/detail/3.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/detail/4.jpg" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
            <div class="right">
                <div class="product-info-wrapper">
                    <h2 class="title">{{product.name}}</h2>
                    <p class="desc">相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏</p>
                    <p class="store">小米自营</p>
                    <div class="price-group">
                        <span class="new-price">{{product.price}}元</span>
                        <del class="old-price">1999元</del>
                    </div>
                </div>
                <div class="location-wrapper">
                    <span class="iconfont">&#xe62b;</span>
                    <div class="location-container">
                        <p><span>北京</span><span>北京市</span><span>海淀区</span><span>清河街道</span><span class="change">修改</span></p>
                        <p><span class="tip">有现货</span></p>
                    </div>
                </div>
                <div class="version-container">
                    <p class="title">选择版本</p>
                    <div class="version-wrapper">
                        <div class="version-option" :class="{check:checked == 0}" :id=0 @click=" choseVersion = $event.target.innerText,$event.target.id == 0 ? (checked = 0):(checked = false)">6GB+64GB</div>
                        <div class="version-option" :class="{check:checked == 1}" :id=1 @click=" choseVersion = $event.target.innerText,$event.target.id == 1 ? (checked = 1):(checked = false)">6GB+128GB</div>
                        <div class="version-option" :class="{check:checked == 2}" :id=2 @click=" choseVersion = $event.target.innerText,$event.target.id == 2 ? (checked = 2):(checked = false)">8GB+128GB</div>
                        <div class="version-option" :class="{check:checked == 3}" :id=3 @click=" choseVersion = $event.target.innerText,$event.target.id == 3 ? (checked = 3):(checked = false)">8GB+256GB</div>
                    </div>
                </div>
                <div class="color-container">
                    <p class="title">选择颜色</p>
                    <div class="color-wrapper">
                        <div class="version-option" :class="{check:color == 0}" :id=0 @click=" choserColor = $event.target.innerText, $event.target.id == 0 ? (color = 0):(color = false)">蓝莓薄荷</div>
                        <div class="version-option" :class="{check:color == 1}" :id=1 @click=" choserColor = $event.target.innerText,$event.target.id == 1 ? (color = 1):(color = false)">黑巧风暴</div>
                        <div class="version-option" :class="{check:color == 2}" :id=2 @click=" choserColor = $event.target.innerText,$event.target.id == 2 ? (color = 2):(color = false)">四季春奶绿</div>
                    </div>
                </div>
                <div class="price-container">
                    <div class="desc">
                        <span>{{product.name}} {{choseVersion}} {{choserColor}}</span>
                        <span>1999元</span>
                    </div>
                    <p class="price">总计：1999元</p>
                </div>
                <div class="submit" @click="addCart">加入购物车</div>
            </div>
        </div>
        <div class="introduce-wrapper">
            <p class="title">价格说明</p>
            <div class="img-wrapper">
                <img src="/imgs/detail/5.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import ProductParam from '../components/ProductParam'
import NavSlide from '../components/NavSlide'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    name:'detail',
    components:{
        ProductParam,
        NavSlide,
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            swiperOptions:{
                pagination:{
                    el:'.swiper-pagination',
                    clickable :true
                },
                loop:true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay:true,
                delay:2000
            },
            product:{},
            id: this.$route.params.id,
            checked : false,
            color : false,
            choseVersion:'6GB+64GB',
            choserColor:'蓝莓薄荷'
        }
    },
    methods:{
        getProduct(){
            this.axios.get(`/products/${this.id}`,{
                params:{
                    productId:this.id
                }
            }).then((res)=>{
                console.log(res)
                this.product = res
            })
        },
        addCart(){
            this.axios({
                method:'post',
                url:'/carts',
                data:{
                    productId:this.id,
                    selected:true
                }
            }).then((res)=>{
                console.dir(res)
                this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
                this.$router.push('/cart')
            })
        },
        // changeVersion(){

        // },
        // changeColor(){
        //     this.choserColor = event.target.innerText 
        //     event.target.id == 
        // }
    },
    mounted(){
        this.getProduct()
    }
}
</script>

<style lang="scss">
    .detail{
        .product-wrapper{
            width: 1226px;
            min-width: 1226px;
            margin: 32px auto 50px;
            .left{
                float: left;
                width: 606px;
                position: relative;
                img{
                    display: inline-block;
                    width: 560px;
                    height: 560px;
                }
                .swiper-pagination{
                    width: 560px;
                    .swiper-pagination-bullet{
                        display: inline-block;
                        border-radius: 0;
                        width: 50px;
                        height: 3px;
                        background-color: rgb(51, 51, 51);
                    } 
                    .swiper-pagination-bullet-active{
                        display: inline-block;
                        border-radius: 0;
                        width: 50px;
                        height: 3px;
                        background-color: rgb(163, 163, 163);
                    }
                }
                
                .swiper-button-prev{
                    position: absolute;
                    display: inline-block;
                    text-align: center;
                    width: 41px;
                    height: 69px;
                    left:  0px;
                    color: rgb(218, 218, 218);
                    &:hover{
                        background-color: rgb(127, 127, 127);
                    }
                    &::after{
                        display: inline-block;
                        height: 69px;
                        line-height: 69px;
                        font-size: 25px;
                        width: 41px;
                    }
                }
                .swiper-button-next{
                    position: absolute;
                    display: inline-block;
                    text-align: center;
                    width: 41px;
                    height: 69px;
                    right:  46px;
                    color: rgb(218, 218, 218);
                    &:hover{
                        background-color: rgb(127, 127, 127);
                    }
                    &::after{
                        display: inline-block;
                        height: 69px;
                        line-height: 69px;
                        font-size: 25px;
                        width: 41px;
                    }
                }
            }
            .right{
                float: right;
                margin-left: 20px;
                width: 600px;
                .product-info-wrapper{
                    border-bottom: 1px solid #e5e5e5;
                    .title{
                        font-size: 24px;
                        color: #212121;
                        font-weight: 400;
                    }
                    .desc{
                        font-size: 14px;
                        height: 42px;
                        line-height: 21px;
                        padding-top: 8px;
                    }
                    .store{
                        margin-top: 14px;
                        font-size: 14px;
                        color: #ff6700;
                    }
                    .price-group{
                        padding-top: 12px;
                        padding-bottom: 22px;
                        .new-price{
                            color: #ff6700;
                            font-size: 18px;
                        }
                        .old-price{
                            margin-left: 5px;
                            font-size: 14px;
                        }
                    }
                }
                .location-wrapper{
                    position: relative;
                    margin-top: 20px;
                    background-color: #fafafa;
                    padding: 30px 50px;
                    border: 1px solid #e0e0e0;
                    margin-bottom: 30px;
                    .iconfont{
                        position: absolute;
                        left: 20px;
                        color: #b0b0b0;
                        font-size: 25px;
                    }
                    .location-container{
                        font-size: 15px;
                        span{
                            margin: 10px;
                        }
                        .change{
                            color: #ff6700;
                        }
                        .tip{
                            color: #ff6700;
                        }
                    }
                }
                .version-container{
                    .title{
                        font-size: 18px;
                        height: 27px;
                        line-height: 27px;
                        margin-bottom: 15px;
                    }
                    .version-wrapper{
                        line-height: 42px;
                        margin-bottom: 20px;
                        .version-option{
                            text-align: center;
                            float: left;
                            // display: inline-block;
                            margin-bottom: 15px;
                            height: 42px;
                            width: 292px;
                            font-size: 16px;
                            border: 1px solid #e0e0e0;
                            &:hover{
                                color: #ff6700;
                                border: 1px solid #ff6700;
                            }
                            &.check{
                                border-color: #ff6700;
                                color: #ff6700;
                            }
                        }
                        .version-option:nth-child(2n-1){
                            margin-right: 12px;
                        }
                        &::after{
                            content: '';
                            display: block;
                            clear: both;
                        }
                    }
                }
                .color-container{
                    .title{
                        font-size: 18px;
                        height: 27px;
                        line-height: 27px;
                        margin-bottom: 15px;
                    }
                    .color-wrapper{
                        line-height: 42px;
                        margin-bottom: 20px;
                        .version-option{
                            text-align: center;
                            float: left;
                            margin-bottom: 15px;
                            height: 42px;
                            width: 292px;
                            font-size: 16px;
                            border: 1px solid #e0e0e0;
                            &:hover{
                                color: #ff6700;
                                border: 1px solid #ff6700;
                            }
                            &.check{
                                border-color: #ff6700;
                                color: #ff6700;
                            }
                        }
                        .version-option:nth-child(2n-1){
                            margin-right: 12px;
                        }
                        &::after{
                            content: '';
                            display: block;
                            clear: both;
                        }
                    }
                }
                .price-container{
                    background-color: #f9f9fa;
                    padding: 30px;
                    margin-bottom: 30px;
                    .desc{
                        display: flex;
                        justify-content: space-between;
                        font-size: 14px;
                    }
                    .price{
                        padding-top: 20px;
                        font-size: 24px;
                        color: #ff6700;
                    }
                }
                .submit{
                    color: #fff;
                    width: 300px;
                    text-align: center;
                    line-height: 54px;
                    font-size: 16px;
                    cursor: pointer;
                    background-color: #ff6700;
                }
            }
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
        .introduce-wrapper{
            background-color: #f5f5f5;
            padding-bottom: 50px;
            .title{
                font-size: 24px;
                font-weight: 400;
                padding: 1em 0;
            }
            .img-wrapper{
                width: 1226px;
                margin: auto;
            }
        }
    }
</style>