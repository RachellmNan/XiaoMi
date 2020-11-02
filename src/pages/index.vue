<template>
    <div class="Index">
        <div class="wraper">
            <div class="container">
                <div class="swiper-box">
                    <swiper ref="mySwiper" :options="swiperOptions">
                        <swiper-slide v-for="item of slideList" :key="item.id">
                            <a :href="'/#/product/'+item.id">
                                <img :src="item.img">
                            </a>
                        </swiper-slide>
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                                        <img v-lazy="item.img" alt="">
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
                        <a :href="'/#/product/'+item.id" v-for="item of adsList" :key="item.id">
                            <img v-lazy="item.img" alt="">
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
            <goods-box :lists="PhoneGoods"  modal="1" :singalPoster="singalPoster" title="手机" @modalstatus="modalstatus"></goods-box>
            <modal btnType=1 title="提示" :showModal="showmodal" @modalstatus="modalstatus" @iconClose="iconClose">
                <template v-slot:body-content>
                    <p>商品添加成功</p>
                </template>
            </modal>
            <div class="banner-box">
                <a href="javascript:;">
                    <img src="/imgs/banner/machine.jpg" alt="">
                </a>
            </div>
            <goods-box :lists="MathineGoods" modal="2" :imgGroup = "MathineImgGroup"   title="家电"></goods-box>
            <div class="banner-box">
                <a href="javascript:;">
                    <img src="/imgs/banner/Ai.jpg" alt="">
                </a>
            </div>
            <goods-box :lists="AiGoods" modal="2"  :imgGroup = "AiImgGroup"  title="智能"></goods-box>
            <div class="banner-box">
                <a href="javascript:;">
                    <img src="/imgs/banner/surround.jpg" alt="">
                </a>
            </div>
            <goods-box :lists="NearbyGoods" modal="2" :imgGroup = "NearbyImgGroup"   title="周边"></goods-box>
            <div class="banner-box">
                <a href="javascript:;">
                    <img src="/imgs/banner/last.jpg" alt="">
                </a>
            </div>
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
import Modal from '../components/Modal'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Index',
    components:{
        Swiper,
        SwiperSlide,
        SecKill,
        GoodsBox,
        NavSlide,
        VideoWrapper,
        Modal
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
            slideList:[
                {
                    id:'42',
                    img:'/imgs/banner/swiper1.jpg'
                },{
                    id:'45',
                    img:'/imgs/banner/swiper2.jpg'
                },{
                    id:'46',
                    img:'/imgs/banner/swiper3.jpg'
                },{
                    id:'47',
                    img:'/imgs/banner/swiper4.jpg'
                },{
                    id:'48',
                    img:'/imgs/banner/swiper5.jpg'
                }
            ],
            adsList:[{
                    id:33,
                    img:"/imgs/banner/ads-1.png"
                },{
                    id:48,
                    img:"/imgs/banner/ads-2.jpg"
                },{
                    id:45,
                    img:"/imgs/banner/ads-3.png"
                }
            ],
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
            singalPoster:"/imgs/poster/0.jpg",
            PhoneGoods:{},
            MathineGoods:{},
            MathineImgGroup:[],
            AiGoods:{},
            AiImgGroup:[],
            NearbyGoods:{},
            NearbyImgGroup:[],
            VideoGroup:[],
            SecGroup:[],
            btnType : 1,
            showmodal:false
        }
    },
    methods:{
        modalstatus(status){
            this.showmodal = false
            if(status) this.showmodal = true 
        },
        iconClose(status){
            this.showmodal = false
            if(status) this.showmodal = true 
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
            this.MathineGoods = res["Machine-goods"],
            this.MathineImgGroup = [{"id":"0","imgSrc":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f256b81e4233333692eece77ed06ebc2.jpg?thumb=1&w=468&h=600&f=webp&q=90"},
                                    {"id":"1","imgSrc":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e22cf675726deb5eb728f2ccd4cbeafd.jpg?thumb=1&w=468&h=600&f=webp&q=90"}]
            this.AiGoods     = res["Ai-goods"]
            this.AiImgGroup  = [{"id":"0","imgSrc":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/45c23f5b9a927b2dc49c25277e07727c.jpg?thumb=1&w=468&h=600&f=webp&q=90"},
                                {"id":"1","imgSrc":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a660ce095e8f553a9ed1515265f4e9fc.jpg?thumb=1&w=468&h=600&f=webp&q=90"}]
            this.NearbyGoods = res["nearby"]
            this.NearbyImgGroup = [{"id":"0","imgSrc":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/37dc0898c2624b4130da4631f2d9a675.jpg?thumb=1&w=468&h=600&f=webp&q=90"},
                                    {"id":"1","imgSrc":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/582984b9c56cf3c48382a81528a4dfdf.jpg?thumb=1&w=468&h=600&f=webp&q=90"}]
            this.VideoGroup  = res["HomeVideo"]
            this.SecGroup    = res["SecKillGoods"]
        })
        this.axios.defaults.baseURL = '/api'
        console.dir(this)
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
                    height: 170px;
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