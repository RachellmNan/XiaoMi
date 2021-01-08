<template>
    <div class="pay">
        <scan-pay-code @close-modal="closeWePay" v-if="showWePay" ></scan-pay-code>
        <modal sureText="查看订单" cancelText="未支付" title="支付确认" btnType=2 :showModal="showModal" @commit-address="goOrderList" @cancel-commit="cancelPay" @iconClose="closeModal">
            <template v-slot:body-content>
                <p>您确认是否完成支付</p>
            </template>
        </modal>
        <div class="container">
            <div class="order-detail-wrapper">
                <div class="top"  :class="{select:select}">
                    <div class="img-wrapper">
                        <span class="iconfont">&#xe615;</span>
                    </div>
                    <div class="submit-info-wrapper">
                        <h3>订单提交成功！去付款咯～</h3>
                        <p>请在 <span class="time">0 小时 15 分</span> 内完成支付, 超时后将取消订单</p>
                        <p  v-if="select == false ">
                            <span>收货信息：</span>
                            <span>{{addressList.receiverName}} </span>
                            <span>{{addressList.receiverMobile}} </span>
                            <span>{{addressList.receiverProvince}} </span>
                            <span>{{addressList.receiverCity}} </span>
                            <span>{{addressList.receiverDistrict}} </span>
                            <span>{{addressList.receiverAddress}} </span>
                        </p>
                    </div>
                    <div class="detail-wrapper ">
                        <p>应付总额：<span class="price">{{payment}}</span><span class="color">元</span></p>
                        <p class="showdetail" @click="select = !select">订单详情<span class="iconfont">&#xe687;</span></p>
                    </div>
                    <div class="hide-wrapper">
                        <div class="order-wrapper box">
                            <p class="left ">订单号：</p>
                            <p class="right number">5200909355353974</p>
                        </div>
                        <div class="ddress-info box">
                            <p class="left">收货信息：</p>
                            <p class="right">
                                <span>{{addressList.receiverName}} </span>
                                <span>{{addressList.receiverMobile}} </span>
                                <span>{{addressList.receiverProvince}} </span>
                                <span>{{addressList.receiverCity}} </span>
                                <span>{{addressList.receiverDistrict}} </span>
                                <span>{{addressList.receiverAddress}} </span>
                            </p>
                        </div>
                        <div class="goods-wrapper box">
                            <p class="left">商品名称：</p>
                            <div class="goods-list">
                                <p class="goods-item" v-for="item of productList" :key="item.id">
                                    <img :src="item.productImage" alt="">{{item.productName}}
                                </p>
                            </div>
                            <!-- <p class="right flex">小米巨能写 黑色 10支装</p> -->
                        </div>
                        <div class="check-wrapper box">
                            <p class="left">发票信息：</p>
                            <p class="right">电子普通发票 个人</p>
                        </div>
                    </div>
                </div>
                <div class="buttom"></div>
            </div>
            <div class="pay-detail-wrapper">
                <div class="tip-wrapper">
                    <p class="tip">选择以下支付方式付款</p>
                </div>
                <div class="payment-box">
                    <div class="payment-header">
                        <p>支付平台</p>
                    </div>
                    <div class="payment-list">
                        <div class="payment-item" @click="WePay">
                            <img src="/imgs/pay/wechat.jpg" alt="">
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import ScanPayCode from '../components/ScanPayCode'
import QRCode from 'qrcode'
import Modal from '../components/Modal'
export default {
    name:'pay',
    components:{
        ScanPayCode,
        Modal
    },
    data(){
        return {
            select:false,
            addressList : [],
            productList:  [],
            payment:0,
            orderNo : this.$route.query.orderNo,
            showWePay : false, // 显示支付二维码
            showModal: false,  // 显示弹窗  
            WeChatImg : ''
        }
    },
    methods:{
        getsInfo(){
            this.axios.get(`/orders/${this.orderNo}`,{
                params:{
                    orderNo:this.orderNo
                }
            }).then((res)=>{
                this.addressList = res.shippingVo
                this.productList = res.orderItemVoList
                this.payment = res.payment
            })
        },
        WePay(){
            this.axios.post('/pay',{
                orderId:this.orderNo,
                orderName:'小米', //扫码支付时订单名称
                amount:0.01, //单位元
                payType:2 //1支付宝，2微信
            }).then((res)=>{
                QRCode.toDataURL(res.content)
                .then(url => {
                    this.WeChatImg = url
                    this.showWePay = true
                })
                .catch(err => {
                    console.error(err)
                })
            })
        },
        closeWePay(){
            this.showWePay = false
            this.showModal = true
        },
        // 前往订单列表
        goOrderList(){
            this.showModal = false
            this.$router.push('/order/list')
        },
        // cancelPay
        cancelPay(){
            this.showModal = false
        },
        // 关闭弹窗
        closeModal(params){
            if(!params) this.showModal = false
        }
    },
    mounted(){
        console.log(this.$route)
        this.getsInfo()

    }
}
</script>

<style lang="scss">
.pay{
    background-color: #f5f5f5;
    padding-top: 50px;
    padding-bottom: 70px;
    .container{
        width: 1226px;
        margin: auto;
        
        .order-detail-wrapper{
            padding: 30px 48px ;
            margin-bottom: 30px;
            background-color: #fff;
            .top{
                height: 140px;
                overflow: hidden;
                transition: height .3s ;
                &.select{
                    height: 500px;
                    transition: height .3s ;
                }
                .img-wrapper{
                    float: left;
                    width: 80px;
                    height: 80px;
                    border-radius: 100%;
                    border: 1px solid #83c44e;
                    margin-right: 60px;
                    .iconfont{
                        display: block;
                        color: #83c44e;
                        font-size: 62px;
                        margin-top: 5px;
                        margin-left: 9px;
                    }
                }
                .submit-info-wrapper{
                    float: left;
                    height: 100px;
                    padding: 20px 0;
                    h3{
                        margin-bottom: 10px;
                        font-size: 24px;
                        font-weight: 400;
                    }
                    .time{
                        color: #ff6700;
                    }
                    p{
                        color: #616161;
                        line-height: 28px;
                        margin-bottom: 5px;
                        font-size: 14px;
                    }
                }
                .detail-wrapper{
                    float: right;
                    padding: 20px 0;
                    color: #757575;
                    font-size: 14px;
                    line-height: 40px;
                    height: 80px;
                    cursor: pointer;
                    .price{
                        color: #ff6700;
                        font-size: 23px;
                    }
                    .color{
                        color: #ff6700;
                    }
                    .showdetail{
                        text-align: right;
                        transition:  color .3s;
                        .iconfont{
                            margin-left: 5px;
                        }
                    }
                    &:hover{
                        .showdetail{
                            color: #ff6700;
                            transition:  color .3s;
                            .iconfont{
                                color: #ff6700;
                            }
                        }
                        
                    }
                }
                .hide-wrapper{
                    float:right;
                    width: 995px;
                    margin-top: 10px;
                    padding-top: 20px;
                    border-top: 1px solid #e0e0e0;
                    .left{
                        width: 84px;
                        text-align: left;
                    }
                    p{
                        display: inline-block;
                        height: 24px;
                        font-size: 14px;
                    }
                    .number{
                        color: #ff6700;
                    }
                    .box{
                        margin-bottom: 8px;
                    }
                    .goods-wrapper{
                        display: flex;
                        .goods-list{
                            display: inline-block;
                            .goods-item{
                                display: block;
                                line-height: 24px;
                                img{
                                    display: inline-block;
                                    margin-right: 5px;
                                    width: 24px;
                                }
                            } 
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
        .pay-detail-wrapper{
            background-color: #fff;
            padding: 30px 48px;
            .tip-wrapper{
                height: 50px;
                border-bottom: 1px solid #e0e0e0;
                margin-bottom: 30px;
                font-size: 18px;
            }
            .payment-box{
                .payment-header{
                    margin-bottom: 15px;
                    p{
                        font-size: 16px;
                        color: #616161;
                        font-weight: 700;
                    }
                }
                .payment-list{
                    .payment-item{
                        display: inline-block;
                        width: 174px;
                        border: 1px solid #e0e0e0;
                        cursor: pointer;
                        &:hover{
                            border-color: #ff6700;
                        }
                        img{
                            display: inline-block;
                            width: 174px;
                        }
                    }
                }
            }
        }
        
    }
}
    
</style>