<template>
    <div class="scanPay">
        <div class="mask"></div>
        <div class="wrapper">
            <div class="img-wrapper">
                <img src="/imgs/pay/icon-scan.png" alt="">
            </div>
            <div class="info-wrapper">
                <div class="info-header">
                    <span class="title">微信支付</span>
                    <span class="iconfont" @click="$emit('close-modal',false)">&#xe609;</span>
                </div>
                <div class="info-body">
                    <img src="/imgs/pay/me.png" alt="">
                </div>
                <div class="info-footer">
                    <p>请使用微信扫一扫</p>
                    <p>二维码完成支付</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ScanPayCode'
}
</script>

<style lang="scss">
    .scanPay{
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
        .wrapper{
            position: fixed;
            left: 50%;
            top: 40%;
            z-index: 102;
            display: flex;
            align-items: center;
            transform: translate(-50%,-50%);
            .img-wrapper{
                display: inline-block;
                img{
                    display: inline-block;
                    width: 250px;
                }
            }
            .info-wrapper{
                display: inline-block;
                width: 350px;
                height: 350px;
                background-color: #fff;
                .info-header{
                    padding: 10px;
                    .title{
                        font-size: 18px;
                    }
                    .iconfont{
                        font-size: 9px;
                        float: right;
                        padding: 6px;
                        cursor: pointer;
                    }
                    &::after{
                        content: '';
                        display: block;
                        clear: both;
                    }
                }
                .info-body{
                    text-align: center;
                    img{
                        display: inline-block;
                        width: 240px;
                        height: 240px;
                    }
                }
                .info-footer{
                    text-align: center;
                    p{
                        margin-bottom: 5px;
                    }
                }
            }
        }
    }

</style>