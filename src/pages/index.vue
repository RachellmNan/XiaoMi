<template>
    <div class="Index">
        <div class="wraper">
            <div class="container">
                <div class="swiper-box">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide><img src="/imgs/banner/swiper1.png"></swiper-slide>
                        <swiper-slide><img src="/imgs/banner/swiper2.png"></swiper-slide>
                        <swiper-slide><img src="/imgs/banner/swiper3.png"></swiper-slide>
                        <swiper-slide><img src="/imgs/banner/swiper4.png"></swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <div class="site-category">
                    <ul class="site-category-list">
                        <li class="category-item">
                            <a class="iconfont"><span>手机 电话卡</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of PhoneList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a  class="iconfont"><span>电视 盒子</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of TvList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>笔记本 显示器</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of MacList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>家电 插线板</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of MachineList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>出行 穿戴</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of WearList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>智能 路由器</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of RouterList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>电源 配件</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of PartsList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>健康 儿童</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of HealthList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>耳机 音箱</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of HeadsetList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="category-item">
                            <a class="iconfont"><span>生活 箱包</span></a>
                            <div class="category-extend">
                                <ul class="extend-wraper" v-for="(items,index) of LifeList" :key="index">
                                    <li class="extend-item" v-for="item of items" :key=item.id>
                                        <img :src="item.img" alt="">
                                        <span>{{item.title}}</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="banners-wraper">
                    <div class="option-wraper">
                        <a class="item" href="javascript:;">
                            <img src="/imgs/miao.png" alt="小米秒杀">
                            <span>小米秒杀</span>
                        </a >
                        <a class="item" href="javascript:;">
                            <img src="/imgs/tuan.png" alt="企业团购" >
                            <span>企业团购</span>
                        </a>
                        <a class="item" href="javascript:;">
                            <img src="/imgs/f.png" alt="F码通道" href="javascript:;">
                            <span>F码通道</span>
                        </a>
                        <a class="item" href="javascript:;">
                            <img src="/imgs/mifen.png" alt="米粉卡" href="javascript:;">
                            <span>米粉卡</span>
                        </a>
                        <a class="item"  href="javascript:;">
                            <img src="/imgs/change.png" alt="以旧换新" href="javascript:;">
                            <span>以旧换新</span>
                        </a>
                        <a class="item" href="javascript:;">
                            <img src="/imgs/huafei.png" alt="话费充值" href="javascript:;">
                            <span>话费充值</span>
                        </a>
                    </div>
                    <div class="banner-list">
                        <a href="javascript:;">
                            <img src="/imgs/banner/5.jpg" alt="">
                        </a>
                        <a href="javascript:;">
                            <img src="/imgs/banner/6.jpg" alt="">
                        </a>
                        <a href="javascript:;">
                            <img src="/imgs/banner/7.jpg" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom-wraper">
            <sec-kill :lists="SecGroup"></sec-kill>
            <div class="banner-box">
                <a href="javascript:;">
                    <img src="/imgs/banner/phone.jpg" alt="">
                </a>
            </div>
            <!-- <goods-box :lists="PhoneGoods"></goods-box> -->
            <goods-box :lists="AiGoods"></goods-box>
            <video-wrapper :lists="VideoGroup"></video-wrapper>
            <NavSlide></NavSlide>
        </div>
    </div>
</template>

<script>
import SecKill from '../components/SecKill'
import GoodsBox from '../components/GoodsBox'
import NavSlide from '../components/NavSlide'
import VideoWrapper from '../components/VideoWrapper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Index',
    components:{
        Swiper,
        SwiperSlide,
        SecKill,
        GoodsBox,
        NavSlide,
        VideoWrapper
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
                delay:3000
            },
            PhoneList:[],
            TvList:[],
            MacList:[],
            MachineList:[],
            WearList:[],
            RouterList:[],
            PartsList:[],
            HealthList:[],
            HeadsetList:[],
            LifeList:[],
            PhoneGoods:{},
            AiGoods:{},
            VideoGroup:[],
            SecGroup:[]
        }
    },
    computed:{
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted(){
        this.axios.defaults.baseURL = ''
        this.axios.get('/mock/data.json').then((res)=>{
            this.PhoneList   = res["phone-list"]
            this.TvList      = res["tv-list"]
            this.MacList     = res["mac-list"]
            this.MachineList = res["machine-list"]
            this.WearList    = res["wear-list"]
            this.RouterList  = res["router-list"]
            this.PartsList   = res["parts-list"]
            this.HealthList  = res["health-list"]
            this.HeadsetList = res["headset-list"]
            this.LifeList    = res["life-list"]
            this.PhoneGoods  = res["Phone-goods"]
            this.AiGoods     = res["Ai-goods"]
            this.VideoGroup  = res["HomeVideo"]
            this.SecGroup    = res["SecKillGoods"]

        })
    }
}
</script>

<style lang="scss">
.Index{
    background-color: whitesmoke;
    .wraper{
        background-color: #fff;
    }
    .container{
        width: 1226px;
        min-width: 1226px;
        margin: auto;
        background-color: whitesmoke;
        .swiper-box{
            position: relative;
            height: 460px;
            .swiper-pagination{
                width: 400px;
                margin-left:750px;
                text-align: right;
                .swiper-pagination-bullet{
                    margin: 0 4px;
                } 
                .swiper-pagination-bullet-active{
                    background-color: #d8d1f8c2;
                }
            }
            img{
                width: 1226px;
            }
            .swiper-button-prev,.swiper-button-next{
                color: #b0b0b0;
                width: 40px;
                height: 69px;
                position: absolute;
                z-index: 5;
                &::after{
                    height: 40px;
                    line-height: 40px;
                    font-size: 30px;
                }
                &:hover{
                    color: rgb(241, 241, 241);
                    background-color: rgb(98, 96, 125);
                }
            }
            .swiper-button-prev{
                left: 234px;
            }
            .swiper-button-next{
                right: 0px;
            }
        }
        .site-category{
            width: 234px;
            height: 460px;
            position: absolute;
            z-index: 5;
            top: 140px;
            .site-category-list{
                padding: 20px 0;
                position: relative;
                background-color: rgba(105,101,101,.6);
                .category-item{
                    padding-left: 30px;
                    height: 42px;
                    line-height: 42px;
                    &:hover{
                        background-color: #ff6700;
                    }
                    a{
                        color: #fff;
                        height: 42px;
                        display: inline-block;
                        span{
                            display: inline-block;
                            width: 124px;
                        }
                    }
                    .iconfont::after{
                        content: '\e688';
                        display: inline-block;
                        text-align: right;
                        margin-left: 20px;
                        width: 30px;
                        height: 42px;
                        line-height: 42px;
                        font-size: 20px;
                        color: #e0e0e0;
                    }
                    &:hover{
                        .category-extend{
                            height: 460px;
                        }
                    }               
                    .category-extend{
                        position: absolute;
                        display: flex;
                        left: 234px;
                        top: 0px;
                        height: 0px;
                        background: #fff;
                        overflow: hidden;
                        box-shadow:0 8px 16px rgba(0,0,0,.18);
                        .extend-wraper{
                            width: 248px;
                            .extend-item{
                                padding: 18px 20px;
                                width: 225px;
                                img{
                                    display: inline-block;
                                    width: 40px;
                                    height: 40px;
                                    margin-right: 12px;
                                    vertical-align: middle;
                                    margin-right: 12px;
                                }
                                span{
                                    vertical-align: middle;
                                    display: inline-block;
                                    line-height: 40px;
                                    width: 172px;
                                    transition: all .3s;
                                }
                                &:hover{
                                    span{
                                        color: #ff6700;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .banners-wraper{
            margin: 20px 0;
            .option-wraper{
                float:left;
                width: 234px;
                height: 170px;
                background-color: #5f5750;
                a{
                    float: left;
                    display: block;
                    width: 76px;
                    height: 64px;
                    padding-top: 18px;
                    text-align: center;
                    img{
                        display: block;
                        width: 24px;
                        margin: 0 23px 4px;
                    }
                    span{
                        color: #fff;
                        display: block;
                    }
                }
                &::after{
                    content: '';
                    display: block;
                    clear: both;
                }
            }
            .banner-list{
                float: left;
                margin-left: 14px;
                a{
                    margin-left: 15px;
                }
                a:first-of-type{
                    margin-left: 0px;
                }
                img{
                    width: 316px;
                }
            }
            &::after{
                    content: '';
                    display: block;
                    clear: both;
            }
        }
    }
    .bottom-wraper{
        width: 1226px;
        min-width: 1226px;
        margin: auto;
        .banner-box{
            margin: 22px 0;
            img{
                width: 1226px;
            }
        }
    }
}
</style>