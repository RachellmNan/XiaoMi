<template>
    <div class="Index">
        <div class="container">
            <div class="swiper-box">
                <swiper :options="swiperOptions">
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
                        <a class="iconfont">手机 电话卡</a>
                        <div class="category-detail">

                        </div>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">电视 盒子</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">笔记本 显示器</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">家电 插线板</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">出行 穿戴</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">智能 路由器</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">电源 配件</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">健康 儿童</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">耳机 音箱</a>
                    </li>
                    <li class="category-item">
                        <a class="iconfont">生活 箱包</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
    name:'Index',
    components:{
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
                delay:3000
            }
        }
    },
    mounted(){
        this.axios.defaults.baseURL = ''
        this.axios.get('/mock/data.json').then((res)=>{
            console.log(res)
        })
    }
}
</script>

<style lang="scss">
.Index{
    .container{
        width: 1226px;
        min-width: 1226px;
        margin: auto;
        .swiper-box{
            position: relative;
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
            height: 420px;
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
                    position: relative;
                    &:hover{
                        background-color: #ff6700;
                    }
                    a{
                        color: #fff;
                    }
                    .iconfont::before{
                        content: '\e600';
                        display: inline-block;
                        position: absolute;
                        right: 20px;
                        top: 0px;
                        width: 30px;
                        height: 30px;
                        font-size: 20px;
                        color: #e0e0e0;
                    }
                }
            }
        }
    }
}
</style>