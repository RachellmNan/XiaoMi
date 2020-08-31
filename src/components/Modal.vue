<template>
    <div class="modal">
        <div class="mask"></div>
        <div class="modal-wrapper">
            <div class="header">
                <p>{{title}}</p>
                <span class="iconfont">&#xe609;</span>
            </div>
            <div class="body">
                <slot name="body-content"></slot>
            </div>
            <div class="footer">
                <span class="tip" v-if="btnType == 1">查看购物车</span>
                <div class="but-group" v-if="btnType == 2">
                    <span class="submit">确定</span>
                    <span class="cancel">取消</span>
                </div>
            </div>
        </div>
    </div>
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
        .modal-wrapper{
            position: absolute;
            z-index: 102;
            left: 50%;
            top: 40%;
            width: 550px;
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
                    width: 20px;
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
                padding: 42px 40px 54px;
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
                    background-color: #ff6700;
                }
                .submit{
                    background-color: #ff6700;
                    margin-right: 50px;
                }
                .cancel{
                    background-color: #656464;
                }
            }
        }
    }
</style>