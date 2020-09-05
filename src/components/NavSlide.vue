<template>
    <div class="NavSlide">
        <ul class="help-list">
            <li class="help-item">
                <a href="javascript:;">
                    <span class="iconfont">&#xe683;</span>
                </a> 
                <div class="extend wechat">
                    <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png" alt="">
                    <span class="desc">扫码领取新人百元礼包</span>
                </div>
            </li>
            <li class="help-item ">
                <a href="javascript:;">
                    <span class="iconfont">&#xe65b;</span>
                </a>
                <div class="extend">
                    <span>个人中心</span>
                </div>
            </li>
            <li class="help-item">
                <a href="javascript:;">
                    <span class="iconfont">&#xe624;</span>
                </a>
                <div class="extend">
                    <span>售后服务</span>
                </div>
            </li>
            <li class="help-item">
                <a href="javascript:;">
                    <span class="iconfont">&#xe646;</span>
                </a>
                <div class="extend">
                    <span>人工客服</span>
                </div>
            </li>
            <li class="help-item">
                <a href="javascript:;">
                    <span class="iconfont">&#xe610;</span>
                </a>
                <div class="extend cart">
                    <span >购物车(0)</span>
                </div>
            </li>
        </ul>
        <ul class="cart-list">
            <li class="help-item" v-show="ShowButton" @click="GoTop">
                <a href="javascript:;">
                    <span class="iconfont">&#xe62c;</span>
                </a>
                <div class="extend">
                    <span>回顶部</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'NavSlide',
    data(){
        return {
            ShowButton: false
        }
    },
    methods:{
        handleScroll(){
            this.ShowButton = document.documentElement.scrollTop > 900
        },
        GoTop(){
            document.documentElement.scrollTop = 0
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="scss">
    .NavSlide{
        .help-list{
            position: fixed;
            bottom: 102px;
            right: 43px;
        }
        .cart-list{
            position: fixed;
            bottom: 40px;
            right: 43px;
        }
        .help-item{
            background-color: #fff;
            border: 1px solid #f5f5f5;
            border-bottom: none;
            width: 27px;
            height: 42px;
            line-height: 42px;
            text-align: center;
            position: relative;
            overflow: hidden;
            cursor: pointer;
            &:hover{
                .extend{
                    opacity: 1;
                    // height: 25px;
                    width: 50px;
                    &.wechat{
                        width: 100px;
                    }
                }
                overflow: visible;
            }
            span{
                color: #757575;
                font-size: 22px;
            }
            .extend{
                display: inline-block;
                position: absolute;
                border: 1px solid #f5f5f5;
                background-color: #fff;
                z-index: 10;
                top: 8px;
                right: 42px;
                // height: 0px;
                opacity: 0;
                width: 0px;
                line-height: 25px;
                padding: 0px 5px;
                text-align: right;
                overflow: hidden;
                span{
                    font-size: 12px;
                }
            }
            .wechat{
                img{
                    // position: relative;
                    // top: 20px;
                    padding-top: 20px;
                    width: 100px;
                    height: 100px;
                }
                .desc{
                    display: block;
                    margin: auto;
                    text-align: center;
                    width: 60px;
                }
            }
            .cart{
                width: 60px;
            }
            &:nth-of-type(5){
                border-bottom: 1px solid #f5f5f5;
            }
        }
    }
</style>