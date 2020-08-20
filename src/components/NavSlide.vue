<template>
    <div class="NavSlide">
        <ul class="help-list">
            <li class="help-item iconfont">
                <a href="javascript:;">
                    <span>&#xe683;</span>
                </a> 
                <div class="extend">

                </div>
            </li>
            <li class="help-item iconfont">
                <a href="javascript:;">
                    <span>&#xe65b;</span>
                </a>
                <div class="extend">
                    <span>个人中心</span>
                </div>
            </li>
            <li class="help-item iconfont">
                <a href="javascript:;">
                    <span>&#xe624;</span>
                </a>
                <div class="extend">
                    <span>售后服务</span>
                </div>
            </li>
            <li class="help-item iconfont">
                <a href="javascript:;">
                    <span>&#xe646;</span>
                </a>
                <div class="extend">
                    <span>人工客服</span>
                </div>
            </li>
            <li class="help-item iconfont">
                <a href="javascript:;">
                    <span>&#xe610;</span>
                </a>
                <div class="extend cart">
                    <span >购物车(0)</span>
                </div>
            </li>
        </ul>
        <ul class="cart-list">
            <li class="help-item iconfont" v-show="ShowButton" @click="GoTop">
                <a href="javascript:;">
                    <span>&#xe62c;</span>
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
            right: 40px;
        }
        .cart-list{
            position: fixed;
            bottom: 40px;
            right: 40px;
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
            cursor: pointer;
            &:hover{
                .extend{
                    opacity: 1;
                    height: 25px;
                }
            }
            span{
                color: #757575;
                font-size: 22px;
            }
            .cart{
                width: 60px;
            }
            .extend{
                display: inline-block;
                position: absolute;
                border: 1px solid #f5f5f5;
                background-color: #fff;
                z-index: 10;
                top: 8px;
                right: 42px;
                height: 0px;
                opacity: 0;
                width: 50px;
                line-height: 25px;
                padding: 0px 5px;
                text-align: right;
                overflow: hidden;
                span{
                    font-size: 12px;
                }
            }
            &:nth-of-type(5){
                border-bottom: 1px solid #f5f5f5;
            }
            // &:last-child{
            //     display: inline-block;
            //     border-bottom: 1px solid #f5f5f5;
            //     margin-top: 15px;
            // }
        }
    }
</style>