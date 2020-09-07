<template>
    <div class="cart">
        <order-header>
            <template v-slot:title>
                <h2>我的购物车</h2>
                <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
            </template>
        </order-header>
        <div class="goods-container">
            <div class="top-bar">
                <div class="check-box" >
                    <div class="allcheck iconfont" :class="{checked:selectedAll}" @click="SelctAllStatus"></div>
                    <p>全选</p>
                </div>
                <div class="empty"></div>
                <div class="name-box">商品名称</div>
                <div class="singal-price">单价</div>
                <div class="count-box">数量</div>
                <div class="total-box">小计</div>
                <div class="operation-box">操作</div>
            </div>
            <div class="goods-wrapper">
                <ul>
                    <li class="goods-item" v-for="item of productList" :key="item.productId">
                        <div class="item-container">
                            <div class="check-box">
                                <div class="allcheck iconfont " :class="{checked:item.productSelected}" @click="singalSelect(item)"></div>
                            </div>
                            <div class="img-wrapper">
                                <img :src="item.productMainImage" alt="">
                            </div>
                            <div class="name-box">{{item.productName}}</div>
                            <div class="singal-price">{{item.productPrice}}元</div>
                            <div class="count-box">
                                <span class="iconfont add" @click="updateStatus('+',item)">&#xe664;</span>
                                {{item.quantity}}
                                <span class="iconfont minus" @click="updateStatus('-',item)">&#xe67a;</span>
                            </div>
                            <div class="total-box">{{item.productTotalPrice}}元</div>
                            <div class="operation-box">
                                <div class="icon-wrapper">
                                    <span class="iconfont" @click="delProduct(item)">&#xe609;</span>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="total-info">
                <div class="left">
                    <span class="back" @click="goback">继续购物</span>
                    <p class="tip">共 <span class="count">{{cartTotalQuantity}}</span> 件商品，已选择 <span class="count">{{cartTotalSelectedQuantity}}</span> 件</p>
                </div>
                <div class="right">
                    <p>合计：<span class="price">{{cartTotalPrice}}</span>元</p>    
                    <p class="submit" :class="{allowsubmit:!allowSubmit}" @click="submit">去结算</p>
                    <p class="tip allowsubmit"  v-if="!allowSubmit">请勾选需要结算的商品</p>
                </div>
            </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from '../components/OrderHeader'
import NavFooter from '../components/NavFooter'
export default {
    name:'cart',
    components:{
        OrderHeader,
        NavFooter
    },
    data(){
        return {
            productList:[],
            selectedAll:'',     //全选状态
            cartTotalPrice:'',   //所有商品的价格
            cartTotalQuantity:0,   //购物车内所有商品的数量
            cartTotalSelectedQuantity:0,  //购物车内所有勾选商品的数量
            allowSubmit: false  // 至少有一个商品被选中，才允许结算
        }
    },
    methods:{
        getProduct(){
            this.axios.get('/carts').then((res)=>{
                this.renderCommon(res)
            })
        },
        updateStatus(comand,target){
            let quantity = target.quantity
            let id = target.productId
            if(comand == '+'){
                quantity++
                this.axios.put(`/carts/${id}`,{
                    quantity,
                    selected: true
                }).then((res)=>{
                    this.renderCommon(res)
                })
            }else if( comand == '-'){
                quantity--
                if(quantity<1) this.$message({
                    showClose:true,
                    type:'warning',
                    message:'购买数量必须大于1'}) 
                if(quantity>=1){
                    this.axios.put(`/carts/${id}`,{
                        quantity,
                        selected: true
                    }).then((res)=>{
                        this.renderCommon(res)
                    })
                }
            }
        },
        delProduct(target){
            let id =target.productId
            this.axios.delete(`/carts/${id}`,{
                params:{
                    productId:id
                }
            }).then((res)=>{
                this.$message.success('删除成功')
                this.renderCommon(res)
            })
        },
        renderCommon(res){
            this.$store.dispatch('saveCartCount',res.cartTotalQuantity)
            this.productList = res.cartProductVoList
            this.selectedAll = res.selectedAll
            this.cartTotalPrice = res.cartTotalPrice
            this.cartTotalQuantity = res.cartTotalQuantity
            this.cartTotalSelectedQuantity = 0
            this.allowSubmit = false
            for(let i = 0 ; i < this.productList.length ;i++){
                if(this.productList[i].productSelected){
                    this.allowSubmit = true
                    this.cartTotalSelectedQuantity += this.productList[i].quantity
                }
            }
        },
        goback(){
            this.$router.go(-1)
        },
        SelctAll(){
            this.axios.put('/carts/selectAll').then((res)=>{
                this.renderCommon(res)
            })
        },
        unSelctAll(){
            this.axios.put('/carts/unSelectAll').then((res)=>{
                this.renderCommon(res)
                
            })
        },
        SelctAllStatus(){
            if(this.selectedAll){
                this.unSelctAll()
            }else{
                this.SelctAll()
            }
        },
        singalSelect(target){
            this.axios.put(`/carts/${target.productId}`,{
                    quantity: target.quantity,
                    selected: !target.productSelected
            }).then((res)=>{
                this.renderCommon(res)
            })
        },
        submit(){
            if(this.allowSubmit) this.$router.push('/order/confirm')
        }
    },
    mounted(){
        this.getProduct()
    }
}
</script>

<style lang="scss">
.cart{
    background-color: #f5f5f5;
    .goods-container{
        width: 1226px;
        margin: auto;
        margin-bottom: 30px;
        .top-bar{
            margin-top: 30px;
            border-bottom: 1px solid #e0e0e0;
            background-color: #fff;
            font-size: 14px;
            width: 1226px;
            height: 70px;
        }
        .check-box{
            width: 110px;
            height: 70px;
            line-height: 70px;
            float: left;
            p{
                display: inline-block;
                vertical-align: middle;
            }
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
        .allcheck{
            display: inline-block;
            position: relative;
            width: 20px;
            height: 18px;
            border: 1px solid #e0e0e0;
            margin: 0px 15px 0 24px;
            vertical-align: middle;
            cursor: pointer;
            &:hover{
                background-color: #ff6700;
                border-color: #ff6700;
                &.iconfont::before{
                    content: "\e615";
                    position: absolute;
                    top: -25px;
                    left: 2px;
                    width: 20px;
                    height: 18px;
                    color: #fff;
                }
            }
            &.checked{
                background-color: #ff6700;
                border-color: #ff6700;
                &.iconfont::before{
                    content: "\e615";
                    position: absolute;
                    top: -25px;
                    left: 2px;
                    width: 20px;
                    height: 18px;
                    color: #fff;
                }
            }
        }
        .empty{
            width: 120px;
            height: 70px;
            float: left;
        }
        .name-box{
            float: left;
            width: 380px;
            line-height: 70px;
        }
        .singal-price{
            float: left;
            width: 148px;
            text-align: center;
            line-height: 70px;
            margin-right: 10px;
        }
        .count-box{
            float: left;
            width: 150px;
            line-height: 70px;
            text-align: center;
        }
        .total-box{
            float: left;
            width: 120px;
            text-align: right;
            line-height: 70px;
            margin-right: 81px;
        }
        .operation-box{
            float: left;
            width: 80px;
            line-height: 70px;
        }
        .goods-wrapper{
            margin-bottom: 20px;
            .goods-item{
                background-color: #fff;
                font-size: 16px;
                border-bottom: 1px solid #e0e0e0;
                // line-height: 86px;
                padding: 15px 0;
                .check-box{
                    height: 86px;
                    
                }
                .img-wrapper{
                    img{
                        float: left;
                        width: 80px;
                        height: 86px;
                        margin-right: 40px;
                    }
                }
                .name-box{
                    font-size: 18px;
                    height: 86px;
                    line-height: 86px;
                }
                .singal-price{
                    height: 86px;
                    line-height: 86px;
                }
                .count-box{
                    height: 38px;
                    margin-top: 24px;
                    margin-bottom: 24px;
                    line-height: 38px;
                    position: relative;
                    border: 1px solid #e0e0e0;
                    .iconfont{
                        &.add{
                            position: absolute;
                            left: 0;
                            content: '\e664';
                            display: inline-block;
                            height: 38px;
                            width: 40px;
                            &:hover{
                                cursor: pointer;
                                background-color: rgb(225,225,225);
                            }
                        }
                        &.minus{
                            position: absolute;
                            right: 0;
                            content: '\e67a';
                            display: inline-block;
                            height: 38px;
                            width: 40px;
                            &:hover{
                                cursor: pointer;
                                background-color: rgb(225,225,225);
                            }
                        }
                    }
                }
                .total-box{
                    height: 86px;
                    line-height: 86px;
                    color: #ff6700;
                }
                .operation-box{
                    height: 86px;
                    display: flex;
                    align-items: center;
                    .icon-wrapper{
                        display: block;
                        position: relative;
                        width: 24px;
                        height: 24px;
                        border-radius: 100%;
                        transition: background-color .3s, color .3s;
                        .iconfont{
                            position: absolute;
                            font-size: 12px;
                            top: -100%;
                            left: 0;
                            transform: translate(75%,26%);
                            color: #757575;
                            width: 8px;
                            height: 8px;
                            cursor: pointer;
                        }
                        &:hover{
                            background-color: #d4483e;
                            .iconfont{
                                color: #fff;
                                transition:  color .3s;
                            }
                            transition: background-color .3s;
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
        .total-info{
            height: 50px;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left{
                width: 374px;
                font-size: 14px;
                .back{
                    display: inline-block;
                    height: 20px;
                    margin-right: 20px;
                    margin-left: 40px;
                    cursor: pointer;
                }
                .tip{
                    display: inline-block;
                    padding-left: 20px;
                    height: 20px;
                    border-left: 1px solid #e0e0e0;
                    .count{
                        color: #ff6700;
                    }
                }
            }
            .right{
                display: flex;
                position: relative;
                p{
                    align-self: center;
                    display: inline-block;
                    font-size: 14px;
                    color: #ff6700;
                    .price{
                        font-size: 30px;
                    }
                }
                .submit{
                    display: inline-block;
                    align-self: center;
                    line-height: 50px;
                    width: 200px;
                    margin-left: 50px;
                    height: 50px;
                    background-color: #ff6700;
                    text-align: center;
                    color: #fff;
                    font-size: 18px;
                    cursor: pointer;
                    &.allowsubmit{
                        color: #b0b0b0;
                        background-color: rgb(224, 224, 224);
                        cursor:not-allowed;
                    }
                }
                .tip{
                    position: absolute;
                    text-align: center;
                    background-color: #fff;
                    left: 50%;
                    transform: translate(-39px);
                    width: 198px;
                    height: 48px;
                    line-height: 50px;
                    top: -66px;
                    color: #ff6700;
                    border: 1px solid #ff6700;
                    &::after{
                        content: '';
                        display: block;
                        position: absolute;
                        left: 50%;
                        bottom: -11px;
                        width: 0;
                        height: 0;
                        border-top: 10px solid #ff6700;
                        border-left: 8px solid transparent;
                        border-right: 8px solid transparent;
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
    
</style>