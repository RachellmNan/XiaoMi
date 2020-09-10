<template>
    <transition name="slide">
        <div class="modal" v-if="showModal">
            <div class="mask"></div>
            <div class="modal-wrapper">
                <div class="header">
                    <p>{{title}}</p>
                    <transition name="test">
                        <span class="iconfont" @click="closeModal">&#xe609;</span>
                    </transition>
                    
                </div>
                <div class="body">
                    <slot name="body-content"></slot>
                </div>
                <div class="footer">
                    <span class="tip" v-if="btnType == 1" @click="goCart">查看购物车</span>
                    <div class="but-group" v-if="btnType == 2">
                        <span class="submit" @click="$emit('commit-address','commit')">{{sureText}}</span>
                        <span class="cancel" @click="$emit('cancel-commit',false)">{{cancelText}}</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name:'Modal',
    props:{
        btnType:{
            type:String,
            default:'1'
        },
        title:{
            type:String,
            defalut:''
        },
        showModal:Boolean,
        sureText:{
            type:String
        },
        cancelText:{
            type:String
        }
    },
    data(){
        return {
        }
    },
    methods:{
        closeModal(){
            this.$emit('iconClose',false)
        },
        goCart(){
            this.$router.push('/cart')
        }
    }
}
</script>

<style lang="scss">
    .modal{
        position: fixed;
        z-index: 100;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: top 1s , opacity 1s;
        .mask{
            position: fixed;
            z-index: 101;
            background-color: #000;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            opacity: 0.5;
        }
        &.slide-enter-active,&.slide-leave-active{
            transition: top 1s , opacity 1s;
        }
        &.slide-enter,&.slide-leave-to{
            top:-100%;
            opacity: 0;
        } 
        .modal-wrapper{
            position: absolute;
            z-index: 102;
            left: 50%;
            top: 40%;
            width: 660px;
            transform: translate(-50%,-50%);
            background-color: #fff;
            .header{
                height: 60px;
                line-height: 60px;
                background-color: #F5F5F5;
                padding: 0 25px;
                font-size: 16px;
                position: relative;
                p{
                    display: inline-block;
                }
                .iconfont{
                    position: absolute;
                    top: 15px;
                    height: 30px;
                    line-height: 30px;
                    width: 40px;
                    text-align: center;
                    right: 20px;
                    transition: transform .25s;
                    font-size: 12px;
                    cursor: pointer;
                    &:hover{
                        transform: scale(1.5);
                        transition: transform .25s;
                    }
                }
            }
            .body{
                padding: 20px;
                font-size: 14px;
                p{
                    font-size: 16px;
                }
            }
            .footer{
                height: 75px;
                line-height: 75px;
                text-align: center;
                background-color: #f5f5f5;
                span{
                    display: inline-block;
                    width: 120px;
                    height: 35px;
                    color: #fff;
                    line-height: 35px;
                }
                .tip{
                    cursor: pointer;
                    background-color: #ff6700;
                }
                .submit{
                    background-color: #ff6700;
                    margin-right: 50px;
                    cursor: pointer;
                }
                .cancel{
                    background-color: #656464;
                    cursor: pointer;
                }
            }
        }
    }
</style>