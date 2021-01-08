<template>
    <div class="product">
        <product-param :title="productList.name"></product-param>
        <div class="content">
            <div class="bg1">
                <p class="title">{{productList.name}}</p>
                <p class="desc">{{productList.subtitle}}</p>
                <div class="paramsGroup">
                    <a href="javascript:;">全球首款双屏 GP</a><span>|</span>
                    <a href="javascript:;">骁龙845</a><span>|</span>
                    <a href="javascript:;">AI 变焦双摄</a><span>|</span>
                    <a href="javascript:;">红外人脸识别</a>
                </div>
                <p class="price">￥{{productList.price}}</p>
            </div>
            <div class="bg2"></div>
            <div class="bg3"></div>
            <div class="item-swiper">
                <swiper :options="swiperOptions">
                    <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <p>小米8 AI变焦双摄拍摄</p>
            </div>
            <div class="video-wrapper">
                <h2>
                    <span>60帧超慢动作摄影</span>
                    <br>
                    <span>慢慢回味每一瞬间的精彩</span>
                </h2>
                <p>
                    <span>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！</span>
                    <br>
                    <span>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</span>
                </p>
                <div class="video-bg" @click="showVideo = true"></div>
                <div class="video-box" >
                    <!-- <transition name="fade"> -->
                        
                            <div class="mask" :class="{'mask-animation':showVideo}"></div>
                            <div class="video-group" :class="{'slide':showVideo}">
                                <span id='closeIcon' class="iconfont" @click="coloseVideo" >&#xe609;</span>
                                <video  src="/imgs/product/video.mp4"  controls="controls" ></video>
                            </div>
                            
                        
                    <!-- </transition> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductParam from '../components/ProductParam'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
    name:'Product',
    components:{
        ProductParam,
        Swiper,
        SwiperSlide
    },
    data(){
        return {
            swiperOptions:{
                slidesPerView:3,
                loop:true,
                autoplay:true,
                delay:3000,
                pagination:{
                    el: '.swiper-pagination',
                    clickable :true
                }
            },
            showVideo:false,
            productList:{}
        }
    },
    methods:{
        getProductDetail(){
            let id = this.$route.params.id
            this.axios.get(`/products/${id}`,{
                params:{
                    productId:id
                }
            }).then((res)=>{
                this.productList = res
            })
        },
        coloseVideo(){
            this.showVideo = false
            let vid = document.getElementsByTagName('video')[0]
            let currentSrc = vid.currentSrc
            setTimeout(()=>{
                vid.src = ''
                vid.src = currentSrc
            },500)
        }
    },
    beforeMount(){
        this.getProductDetail()
    },
    mounted(){
        console.log(this.$route)
    }
}
</script>

<style lang="scss">
    .content{
        .bg1{
            width: 100%;
            height: 718px;
            text-align: center;
            background: url('/imgs/product/product-bg-1.png') no-repeat center;
            .title{
                font-size: 80px;
                padding-top: 55px;
            }
            .desc{
                font-size: 24px;
                font-weight: 800;
                letter-spacing: 10px;
            }
            .paramsGroup{
                margin: 21px 0 40px;
                a{
                    font-size: 16px;
                    color: #333;
                }
                span{
                    margin: 0 15px;
                }
            }
            .price{
                font-size: 38px;
            }
        }
        .bg2{
            width: 100%;
            height: 480px;
            background: url('/imgs/product/product-bg-2.png') no-repeat center;
            background-size: contain;
        }
        .bg3{
            width: 100%;
            height: 638px;
            background: url('/imgs/product/product-bg-3.png') no-repeat center;
            background-size: cover;
        }
        .item-swiper{
            margin: 36px auto 52px;
            text-align: center;
            img{
                height: 232px;
                width: 100%;
            }
            p{
                font-size: 18px;
            }
        }
        .video-wrapper{
            width: 100%;
            background-color: #070708;
            text-align: center;
            color: #fff;
            padding-bottom: 120px;
            h2{
                font-size: 60px;
                padding-top: 82px;
                margin-bottom: 47px;
            }
            p{
                font-size: 24px;
                margin-bottom: 58px;
            }
            .video-bg{
                width: 1226px;
                margin: 0 auto ;
                height: 540px;
                background: url('/imgs/product/gallery-1.png') no-repeat center;
                cursor: pointer;
                background-size: contain;
            }
            .video-box{
                .mask{
                    position: fixed;
                    z-index: 11;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 0;
                    transition: height .5s;
                    background-color: #0000009c;
                    &.mask-animation{
                        height: 100%;
                        transition: height .5s;
                    }
                }
                .video-group{
                    transition: top .3s;
                    position: fixed;
                    opacity: 0;
                    z-index: 12;
                    left: 50%;
                    top: -50%;
                    transform: translate(-50%,-50%);
                    transition: top .5s , opacity .5s;
                    video{
                        width: 900px;
                        object-fit: cover;
                        outline: none ;
                    }
                    span{
                        position: fixed;
                        left: 95%;
                        top: 5%;
                    }
                    .iconfont{
                        cursor: pointer;
                        display: block;
                        width: 20px;
                        height: 20px;
                        color: #fff;
                        z-index: 12;
                    }
                    &.slide{
                        top: 50%;
                        opacity: 1;
                        transition: top .5s,opacity .5s;
                    }
                }
            }
        }
    }
</style>