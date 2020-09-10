<template>
    <div class="OrderList">
        <load v-if="showLoad"></load>
        <no-data v-if="!showLoad && orderList.length == 0"></no-data>
        <div class="container">
            <div class="order-box">
                <div class="order-item" v-for="orderItem of orderList" :key="orderItem.orderNo">
                    <div class="order-detail-header">
                        <div class="header-left">
                            <span>{{orderItem.createTime}}</span>
                            <span>{{orderItem.receiverName}}</span>
                            <span>订单号：{{orderItem.orderNo}}</span>
                            <span>{{orderItem.paymentTypeDesc}}</span>
                        </div>
                        <div class="header-right">
                            <span class="">应付金额：</span>
                            <span class="price-right">{{orderItem.payment}}</span>
                            <span>元</span>
                        </div>
                    </div>
                    <div class="order-detail-bottom">
                        <div class="product-wrapper" v-for="item of orderItem.orderItemVoList" :key="item.productId">
                            <div class="img-wrapper box">
                                <img v-lazy="item.productImage" alt="">
                            </div>
                            <div class="product-detail box">
                                <div class="content">
                                    <p>{{item.productName}}</p>
                                    <p>{{item.currentUnitPrice}}元 x {{item.quantity}} </p>
                                </div>
                            </div>
                        </div>
                        <div class="pay-status">
                            <p>{{orderItem.statusDesc}}</p>
                        </div>
                    </div>
                </div>
            </div>
            <el-pagination
            class="pagination"
                background
                layout="prev,pager,next"
                :page-size="pageSize"
                :total="pageTotal"
                @current-change="handleCurrent">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Load from '../components/loading'
import NoData from '../components/NoData'
import {Pagination} from 'element-ui'
export default {
    name:'OrderList',
    components:{
        Load,
        NoData,
        [Pagination.name] : Pagination
    },
    data(){
        return {
            orderList:[],
            showLoad : true,
            pageSize : 10,
            pageNumber : 1,
            pageTotal: 0
        }
    },
    methods:{
        getOrderList(){
            this.axios.get('/orders',{
                params:{
                    pageNum:this.pageNumber
                }
            }).then((res)=>{
                console.log(res)
                this.orderList = res.list
                this.showLoad = false
                this.pageTotal = res.total
            }).catch(()=>{
                this.showLoad = false
            })
        },
        handleCurrent(pageNum){
            this.pageNumber = pageNum
            this.getOrderList()
        }
    },
    mounted(){
        this.getOrderList()
    }
}
</script>

<style lang="scss">

.OrderList{
    .container{
        width: 1226px;
        padding-top: 30px;
        margin: auto;
        .order-box{
            padding: 20px 0px;
            .order-item{
                border: 1px solid #e0e0e0;
                padding-top: 30px;
                padding-left: 50px;
                padding-right: 50px;
                padding-bottom: 30px;
                margin-bottom: 30px;
                .order-detail-header{
                    font-size: 16px;
                    margin-bottom: 20px;
                    .header-left{
                        float: left;
                        span{
                            // display: inline-block;
                            float: left;
                            padding-right: 15px;
                            height: 20px;
                            line-height: 20px;
                            margin-right: 10px;
                            border-right: 1px solid #b0b0b0;
                            &:last-child{
                                border-right: none;
                            }
                        }
                        &::after{
                            content: '';
                            display: block;
                            clear: both;
                        }
                    }
                    .header-right{
                        float: right;
                        span{
                            &:nth-child(2n){
                                font-size: 20px;
                                color: #ff6700;
                            }
                        }
                    }
                    &::after{
                        content: '';
                        display: inline-block;
                        clear: both;
                    }
                }
                .order-detail-bottom{
                    position: relative;
                    font-size: 14px;
                    .product-wrapper{
                        margin-bottom: 10px;
                        img{
                            display: inline-block;
                            width: 90px;
                        }
                        .box{
                            float: left;
                            height: 90px;
                        }   
                        .product-detail{
                            display: flex;
                            align-items: center;
                        }
                        &::after{
                            content: '';
                            display: block;
                            clear: both;
                        }
                    }
                    .pay-status{
                        right: 0;
                        top: 0;
                        position: absolute;
                        color: #ff6700;
                        font-size: 16px;
                    }
                }
            }
        }
        .pagination{
            text-align: right;
        }
        // .el-pagination.is-background .el-pager li:not(.disabled).active{
        //     background-color: #ff6700;
        // }
    }
}
    
</style>