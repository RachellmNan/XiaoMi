<template>
    <div class="order-header">
        <div class="container">
            <div class="img-wrapper">
                <a href="/#/index">
                    <span class="img-group"></span>
                </a>
            </div>
            <div class="title-wrapper">
                <slot name="title"></slot>
                <!-- 插槽的格式-->
                <!-- <h2>我的购物车</h2>
                <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p> -->
            </div>
            <div class="user-group">
                <div class="user-wrapper">
                    <span >{{user}}<em class="iconfont">&#xe687;</em></span>
                </div>
                <p class="other">我的订单</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'OrderHeader',
    computed:{
        user(){
            return this.$store.state.username
        }
    }
}
</script>

<style lang="scss">
@import '../assets/scss/mixins.scss';
    .order-header{
        width: 100%;
        background-color: #fff;
        border-bottom: 2px solid #ff6700;
        .container{
            width: 1226px;
            height: 100px;
            margin: auto;
            display: flex;
            align-items: center;
            position: relative;
            .img-wrapper{
                margin-right: 45px;
                a{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    overflow: hidden;
                    span{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        transition: margin .5s;
                        &::before{
                            @include fakeImg(55px,55px,'/imgs/mi-logo.png');
                            background-color: #ff6700;
                        }
                        &::after{
                            @include fakeImg(55px,55px,'/imgs/mi-home.png');
                            background-color: #ff6700;
                        }
                        &:hover{
                            margin-left: -55px;
                            transition: margin .5s;
                        }
                    }
                    
                }
            }
            .title-wrapper{
                h2{
                    display: inline-block;
                    font-size: 28px;
                    font-weight: 400;
                }
                p{
                    display: inline-block;
                    margin: 20px 0 0 15px;
                    color: #757575;
                }
            }
            .user-group{
                position: absolute;
                right: 0;
                .user-wrapper{
                    display: inline-block;
                    span{
                        margin-right:17px;
                        em{
                            margin-left: 8px;
                        }
                        &:hover{
                            color: #ff6700;
                        }
                    }
                    &::after{
                        content: '';
                        position: absolute;
                        top: 0;
                        height: 16px;
                        width: 0px;
                        border-right: 1px solid #b0b0b0;
                    }
                }
                .other{
                    display: inline-block;
                    margin-left: 17px;
                    &:hover{
                        color: #ff6700;
                    }
                }
            }
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
    }
</style>