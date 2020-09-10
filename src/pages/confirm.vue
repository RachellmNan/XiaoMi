<template>
    <div class="confirm">
        <modal sureText='确定' cancelText='取消' :showModal="showModal" btnType=2 title="添加收货地址" @cancel-commit="cancelCommit" @commit-address="commitAddress" @modalstatus="showModal = false" @iconClose="iconClose">
            <template v-slot:body-content>
                <div class="edit-wrapper">
                    <div class="user-group">
                        <div class="wrapper">
                            <input type="text" placeholder="姓名" v-model="receiverName">
                        </div>
                        <div class="wrapper">
                            <input type="text" placeholder="手机号" v-model="receiverMobile">
                        </div>
                    </div>
                    <div class="pro-city">
                        <select name="province" id="province" v-model="receiverProvince">
                            <option value="湖南省" selected>湖南省</option>
                            <option value="广东省" >广东省</option>
                            <option value="浙江省" >浙江省</option>
                        </select>
                        <select name="city" id="city" v-model="receiverCity">
                            <option value="长沙市" selected>长沙市</option>
                            <option value="广州市" >广州市</option>
                            <option value="杭州市" >杭州市</option>
                        </select>
                        <select name="area" id="area" v-model="receiverDistrict">
                            <option value="开福区" selected>开福区</option>
                            <option value="白云区" >白云区</option>
                            <option value="滨江区" >滨江区</option>
                        </select>
                    </div>
                    <div class="textarea" >
                        <textarea name="text" id="textarea" cols="30" rows="10" placeholder="详细地址" v-model="receiverAddress"></textarea>
                    </div>
                    <div class="postcode">
                        <input type="text" placeholder="邮编" v-model="receiverZip">
                    </div>
                </div>
                
            </template>
        </modal>
        <div class="container">
            <div class="address-wrapper">
                <p class="title">收货地址</p>
                <div class="address-container-list">
                    <div class="addres-wrapper-item" :class="{ checked:addressNo == item.id}" v-for="item of addressList" :key="item.id" @click="choseAddress(item)">
                        <div class="address-top">
                            <p class="name">{{item.receiverName}}</p>
                            <p class="phone">{{item.receiverMobile}}</p>
                            <div class="address-detail">
                                <span>{{item.receiverProvince}}</span>
                                <span>{{item.receiverCity}}</span>
                                <span>{{item.receiverDistrict}}</span>
                                <span>{{item.receiverAddress}}</span>
                            </div>
                        </div>
                        <div class="option-wrapper">
                            <span class="change iconfont" @click="changeAddress(item)">&#xe7cd;</span>
                            <span class="del iconfont" @click="delAddress(item.id)">&#xe744;</span>
                        </div>
                    </div>
                    <div class="add-address-wrapper" @click="showModal=true">
                        <p class="icon-wrapper">
                            <span class="iconfont">&#xe664;</span>
                        </p>
                        <p>添加新地址</p>
                    </div>
                </div>
            </div>
            <div class="goods-wrapper">
                <p class="title">商品及优惠券</p>
                <div class="goods-list">
                    <div class="goods-item" v-for="item of productList" :key="item.id">
                        <div class="img-wrapper box">
                            <img :src="item.productMainImage" alt="">
                        </div>
                        <div class="desc-wrapper box">
                            <p class="desc">{{item.productName}}</p>
                        </div>
                        <div class="price-wrapper box">
                            <p>
                                <span>{{item.productPrice}}</span>元 x <span>{{item.quantity}}</span>
                            </p>
                        </div>
                        <div class="price-total-wrapper box">
                            <p class="price">{{item.productTotalPrice}}元</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sendways-wrapper">
                <p class="title">配送方式</p>
                <p class="detail">包邮</p>
            </div>
            <div class="sendways-wrapper">
                <p class="title">发票</p>
                <p class="detail">电子普通发票 </p>
            </div>
            <div class="order-detaip-wrapper">
                <div class="detail-container">
                    <div class="coun-wrapper size">
                        <p class="box left">商品件数:</p>
                        <p class="box right">{{cartTotalQuantity}}件</p>
                    </div>
                    <div class="total-wrapper size">
                        <p class="box left">商品总价:</p>
                        <p class="box right">{{cartTotalPrice}}元</p>
                    </div>
                    <div class="activity-wrapper size">
                        <p class="box left">活动优惠:</p>
                        <p class="box right">-0元</p>
                    </div>
                    <div class="discount-wrapper size">
                        <p class="box left">优惠券抵扣:</p>
                        <p class="box right">-0元</p>
                    </div>
                    <div class="freight-wrapper size">
                        <p class="box left">运费:</p>
                        <p class="box right">0元</p>
                    </div>
                    <div class="sum-wrapper size">
                        <p class="box left">应付总额:</p>
                        <p class="box right">{{cartTotalPrice}}元</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="check-wrapper">
            <div class="left">
                    <span>{{selectedAddress.receiverName}}</span> <span>{{selectedAddress.receiverMobile}}</span>
                    <p><span>{{selectedAddress.receiverProvince}}</span> <span>{{selectedAddress.receiverCity}}</span> <span>{{selectedAddress.receiverDistrict}}</span> <span>{{selectedAddress.receiverAddress}}</span></p>
            </div>
            <div class="right">
                <p class="back" @click="goback">返回购物车</p>
                <p class="submit" @click="submit">立即下单</p>
            </div>
        </div>
    </div>
</template>

<script>
import Modal from '../components/Modal'
export default {
    name:'confirm',
    components:{
        Modal
    },
    data(){
        return {
            addressList: [], // 地址列表
            productList: [], // 购物车中选择的商品
            cartTotalPrice: 0, // 所选商品的总价格
            cartTotalQuantity: 0, // 所选商品的总数量
            selectedAddress:'', //选择的地址
            addressNo:'',  // 所选地址的index
            showModal:false, // 显示弹窗
            receiverName:'', // 
            receiverMobile:'',
            receiverProvince:'',
            receiverCity:'',
            receiverDistrict:'',
            receiverAddress:'',
            receiverZip:'',
            command:'',
            id:''
        }
    },
    methods:{
        getAddress(){
            this.axios.get('/shippings').then((res)=>{
                this.addressList = res.list
            })
        },
        getProduct(){
            this.axios.get('/carts').then((res)=>{
                let product = res.cartProductVoList
                this.cartTotalPrice = res.cartTotalPrice
                for(let i =0 ;i < product.length ; i++){
                    if(product[i].productSelected) {
                        this.productList.push(product[i])
                        this.cartTotalQuantity +=  product[i].quantity
                    }
                }
            })
        },
        // 返回购物车
        goback(){
            this.$router.push('/cart')
        },
        // 结算
        submit(){
            let id = this.selectedAddress.id
            if(!id){
                this.$message({
                    showClose:true,
                    message:'请选择地址',
                    type:'error',
                    duration:1500
                })
            }else {
                this.axios.post('/orders',{
                    shippingId : id
                }).then((res)=>{
                    this.$router.push({
                        path:'/order/pay',
                        query:{
                            orderNo:res.orderNo
                        }
                    })
                    this.clear()
                    this.selectedAddress = ''
                    this.productList = []
                    this.cartTotalPrice = 0
                    this.cartTotalQuantity = 0
                    this.addressNo = ''
                    console.log(this.$route.path)
                    
                })
            }
        },
        // 增加地址
        commitAddress(command){
            let infoItem = {
                'receiverName':this.receiverName, 
                'receiverMobile':this.receiverMobile,
                'receiverProvince':this.receiverProvince,
                'receiverCity':this.receiverCity,
                'receiverDistrict':this.receiverDistrict,
                'receiverAddress':this.receiverAddress,
                'receiverZip':this.receiverZip
            }
            let {receiverName,receiverMobile,receiverProvince,receiverCity,receiverDistrict,receiverAddress,receiverZip} = infoItem
            let errMsg = ''
            command = this.command
            if(receiverName && receiverMobile && receiverProvince && receiverCity && receiverDistrict && receiverAddress && receiverZip){
                let regName = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/
                let regPhone = /^1[3456789]\d{9}$/
                let regZip = /^[1-9][0-9]{5}$/
                if(!regName.test(receiverName)){
                    errMsg = '请填写合法名字'
                }else if(!regPhone.test(receiverMobile)){
                    errMsg = '请填写合法手机号码'
                }else if(!receiverAddress){
                    errMsg = '请填写详细地址'
                }else if(!regZip.test(receiverZip)){
                    errMsg = '请填写合法邮政编码'
                }
                if(errMsg){
                    this.$message({
                        showClose:true,
                        message: errMsg,
                        type:'error',
                        duration:1500
                    })
                }
            }else{
                errMsg = '请将信息填写完成'
                this.$message({
                    showClose:true,
                    message:errMsg,
                    type:'error',
                    duration:1500
                })
            }
            // errMsg若为false 代表没有异常 可以发送增加地址请求
            if(!errMsg){
                if(command == ''){
                    this.axios.post('/shippings',{
                        receiverName,
                        receiverMobile,
                        receiverProvince,
                        receiverCity,
                        receiverDistrict,
                        receiverAddress,
                        receiverZip,
                    }).then(()=>{
                        this.getAddress()
                        // 将地址信息清空
                        this.clear()
                        this.$message({
                            showClose:true,
                            message:'新增地址成功',
                            type:'success',
                            duration:1500
                        })
                    })
                }else if(command == 'change'){
                    this.axios.put(`/shippings/${this.id}`,{
                        receiverName:this.receiverName, 
                        receiverMobile:this.receiverMobile,
                        receiverProvince:this.receiverProvince,
                        receiverCity:this.receiverCity,
                        receiverDistrict:this.receiverDistrict,
                        receiverAddress:this.receiverAddress,
                        receiverZip:this.receiverZip
                    }).then(()=>{
                        this.getAddress()
                        this.id = ''
                        this.command = ''
                        // 将地址信息清空
                        this.clear()
                        this.$message({
                            showClose:true,
                            message:'修改地址成功',
                            type:'success',
                            duration:1500
                        })
                    })
                }
                
            }
        },
        // 取消地址提交
        cancelCommit(){
            this.showModal = false
            this.clear()
        },
        choseAddress(target){
            this.selectedAddress = target
            this.addressNo = target.id
        },
        modalstatus(status){
            this.showModal = status
        },
        // 修改地址
        changeAddress(item){
            this.receiverName = item.receiverName 
            this.receiverMobile = item.receiverMobile
            this.receiverProvince = item.receiverProvince
            this.receiverCity = item.receiverCity
            this.receiverDistrict = item.receiverDistrict
            this.receiverAddress = item.receiverAddress 
            this.receiverZip = item.receiverZip
            this.showModal = true
            this.command = 'change'
            this.id = item.id
        },
        delAddress(shippingId){
            this.axios.delete(`/shippings/${shippingId}`,{
                params:{
                    shippingId
                }
            }).then(()=>{
                this.getAddress()
                this.selectedAddress = ''
            })
            this.$message({
                showClose:true,
                message:'删除成功',
                type:'success',
                duration:1500
            })
        },
        // 将所有地址信息置为空
        clear(){
            this.showModal = false
            this.receiverName = ''
            this.receiverMobile = ''
            this.receiverProvince = ''
            this.receiverCity = ''
            this.receiverDistrict = ''
            this.receiverAddress = ''
            this.receiverZip = ''
        },
        iconClose(){
            this.clear()
        }
    },
    mounted(){
        this.getAddress()
        this.getProduct()
    }
}
</script>

<style lang="scss">
    .confirm{
        background: #f5f5f5;
        padding: 40px 0;
        .container{
            width: 1178px;
            padding: 48px 24px 24px ;
            margin: auto;
            background-color: #fff;
            .address-wrapper{
                margin-bottom: 20px;
                .title{
                    color: #333;
                    font-size: 18px;
                    line-height: 20px;
                    margin-bottom: 20px;
                }
                .address-container-list{
                    .addres-wrapper-item{
                        float: left;
                        margin-right: 17px;
                        margin-bottom: 20px;
                        border: 1px solid #e0e0e0;
                        width: 268px;
                        transition: border-color .3s;
                        cursor: pointer;
                        .iconfont{
                            font-size: 0px;
                        }
                        &.checked{
                            border-color: #ff6700;
                            .iconfont{
                                font-size: 27px;
                                // visibility:visible;
                            }
                            &:hover{
                                border-color: #ff6700;
                            }
                        }
                        .address-top{
                            padding: 15px 24px 0;
                            height: 106px;
                            color: #757575;
                            line-height: 22px;
                            .name{
                                font-size: 18px;
                                color: #333;
                                line-height: 30px;
                                margin-bottom: 10px;
                            }
                            .address-detail{
                                font-size: 14px;
                                span{
                                    display: inline-block;
                                    margin-right: 3px;
                                    overflow-wrap: break-word;
                                }
                            }
                        }
                        .option-wrapper{
                            height: 57px;
                            position: relative;
                            .iconfont{
                                // font-size: 27px;
                                color: #757575;
                                cursor: pointer;
                                &:hover{
                                    color: #ff6700;
                                }
                            }
                            .change{
                                position: absolute;
                                left: 0;
                                margin-left: 20px;
                                margin-top: 12px;
                            }
                            .del{
                                position: absolute;
                                right: 0;
                                margin-right: 20px;
                                margin-top: 12px;
                            }
                        }
                        &:hover{
                            border-color: #b0b0b0;
                            transition: border-color .3s;
                        }
                    }
                    .add-address-wrapper{
                        float: left;
                        margin-right: 17px;
                        margin-bottom: 20px;
                        border: 1px solid #e0e0e0;
                        width: 268px;
                        height: 178px;
                        display: flex;
                        flex-direction:column;
                        justify-content: center;
                        align-items: center;
                        cursor: pointer;
                        color: #b0b0b0;
                        transition: border-color .3s;
                        .icon-wrapper{
                            width: 30px;
                            height: 30px;
                            background-color: #e0e0e0;
                            border-radius: 100%;
                            position: relative;
                            margin-bottom: 5px;
                            transition: background-color .3s;
                            .iconfont{
                                position: absolute;
                                color: #fff;
                                left: 4px;
                                top: 3px;
                                font-size: 22px;
                            }
                        }
                        &:hover{
                            border-color: #b0b0b0;
                            .icon-wrapper{
                                background-color: #b0b0b0;
                            }
                            transition: border-color .3s , background-color .3s;
                        }
                    }
                    &::after{
                        content: '';
                        display: block;
                        clear: both;
                    }
                }
            }
            .goods-wrapper{
                border-bottom: 1px solid #e0e0e0;
                .title{
                    color: #333;
                    font-size: 18px;
                    line-height: 20px;
                    margin-bottom: 20px;
                }
                .goods-list{
                    .goods-item{
                        height: 30px;
                        padding: 15px 0;
                    }
                    .box{
                        height: 30px;
                        line-height: 30px;
                        float: left;
                        color: #424242;
                        font-size: 14px;
                    }
                    .img-wrapper{
                        margin-right: 10px;
                        img{
                            width: 30px;
                            height: 30px;
                        }
                    }
                    .desc-wrapper{
                        width: 650px;
                    }
                    .price-wrapper{
                        width: 115px;
                        text-align: right;
                    }
                    .price-total-wrapper{
                        width: 290px;
                        color: #ff6700;
                        text-align: right;
                    }
                    &::after{
                        content: '';
                        display: block;
                        clear: both;
                    }
                }
            }
            .sendways-wrapper{
                padding: 25px 0;
                border-bottom: 1px solid #e0e0e0;
                height: 46px;
                line-height: 46px;
                &:nth-child(2n){
                    border: none;
                }
                .title{
                    display: inline-block;
                    width: 150px;
                    height: 46px;
                    font-size: 18px;
                }
                .detail{
                    display: inline-block;
                    font-size: 14px;
                    height: 46px;
                    color: #ff6700;
                }
            }
            .order-detaip-wrapper{
                padding: 20px 0;
                margin: 0 48px;
                .detail-container{
                    float: right;
                    font-size: 14px;
                    text-align: right;
                    color: #757575;
                    .left{
                        width: 126px;
                    }
                    .right{
                        width: 65px;
                        color: #ff6700;
                    }
                    .box{
                        display: inline-block;
                    }
                    .size{
                        height: 28px;
                        line-height: 28px;
                        p{
                            height: 28px;
                        }
                    }
                }
                &::after{
                    content: "";
                    display: block;
                    clear: both;
                }
            }
        }
        .check-wrapper{
            width: 1130px;
            height: 40px;
            margin: auto;
            padding: 20px 48px;
            background-color: #fff;
            border-top: 2px solid #f5f5f5;
            .left{
                float: left;
                height: 40px;
                font-size: 14px;
            }
            .right{
                float: right;
                height: 40px;
                p{
                    display: inline-block;
                    margin-left: 40px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    width: 158px;
                    font-size: 14px;
                    cursor: pointer;
                }
                .back{
                    color: #b0b0b0;
                    border: 1px solid rgb(176, 176, 176);;
                }
                .submit{
                    color: #fff;
                    background-color: #ff6700;
                    border: 1px solid #ff6700;
                }
            }
            &::after{
                content: '';
                clear: both;
                display: block;
            }
        }
        .edit-wrapper{
            .user-group{
                margin-bottom: 14px;
                .wrapper{
                    display: inline-block;
                    width: 303px;
                    height: 40px;
                    input{
                        display: block;
                        width: 269px;
                        border: 1px solid #e0e0e0;
                        padding: 10px 16px;
                    }
                    &:nth-child(2n-1){
                        margin-right: 14px;
                    }
                }
            }
            .pro-city{
                margin-bottom: 14px;
                select{
                    display: inline-block;
                    width: 101px;
                    height: 30px;
                    margin-right: 20px;
                    border-color: #e0e0e0;
                    cursor: pointer;
                }
            }
            .textarea{
                margin-bottom: 14px;
                textarea{
                    width: 400px;
                    border-color: #e0e0e0;
                }
            }
            .postcode{
                input{
                    display: block;
                    width: 269px;
                    border: 1px solid #e0e0e0;
                    padding: 10px 16px;
                }
            }
        }
    }
    
</style>