<template>
    <div class="GoodBox">
        <div class="title">
            <h2>搭配</h2>
            <div class="more">
                <ul class="category-list">
                    <li class="item">热门</li>
                    <li class="item">安防</li>
                    <li class="item">出行</li>
                </ul>
            </div>
        </div>
        <div class="goods-container">
            <div class="img-wrapper">
                <img src="/imgs/poster/0.jpg" >
            </div>
            <div class="good-wrapper">
                <ul class="goods-list">
                    <li class="goods-item" v-for="item of GoodsList" :key="item.id">
                        <a href="">
                            <div class="goodsImg-wrapper">
                                <img :src="item.img">
                            </div>
                            <h3>{{item.title}}</h3>
                            <p>{{item.desc}}</p>
                            <p class="price-wrapper">
                                <span class="newPrice">{{item.DisPrice}}</span>
                                <span class="oldPrice">{{item.OldPrice}}</span>
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"GoodsBox",
    props:{
        lists:{
            type:Object
        }
    },
    data(){
        return {
            GoodsList:{}
        }
    },
    watch:{
        lists(newVal){
            this.GoodsList = JSON.parse(JSON.stringify(newVal)).all.data
        }
    }
}
</script>

<style lang="scss">
    .GoodBox{
        background-color: whitesmoke;
        .title{
            position: relative;
            h2{
                font-size: 22px;
                font-weight: 200;
                line-height: 58px;
                color: #333;
                width: 200px;
            }
            .more{
                position: absolute;
                right: 0px;
                top: 0px;
                .category-list{
                    padding: 16px 0 0;
                    font-size: 16px;
                    list-style-type: none;
                    li{
                        display: inline-block;
                        margin: 0 0 0 30px;
                        cursor: pointer;
                        &:hover{
                            color: #ff6700;
                            border-bottom: 2px solid #ff6700;
                        }
                    }
                }
            }
        }
        .goods-container{
            position: relative;
            .img-wrapper{
                float: left;
                margin-bottom: 14px;
                height: 614px;
                img{
                    height: 614px;
                }
            }
            .good-wrapper{
                display: inline-block;
                width: 992px;
                height: 614px;
                margin-bottom: 14px;
                margin:0px 0px 14px 0px;
                .goods-item{
                    float: left;
                    background-color: #fff;
                    width: 234px;
                    height: 260px;
                    padding: 20px 0px;
                    margin-left: 14px;
                    margin-bottom: 14px;
                    text-align: center;
                    a{
                        color: #757575;
                    }
                    .goodsImg-wrapper{
                        height: 160px;
                        width: 160px;
                        margin: 0px 37px 18px;
                        img{
                            width: 160px;
                            height: 160px;
                        }  
                    }
                    h3{
                        font-weight: 400;
                        font-size: 14px;
                        
                        margin: 0px 10px 2px;
                    }
                    p{
                        font-size: 12px;
                        height: 18px;
                        color: #b0b0b0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin: 0px 10px 10px;
                    }
                    .price-wrapper{
                        margin: 0 10px 14px;
                        font-size: 14px;
                        .newPrice{
                            color: #ff6700;
                            margin-right: 15px;
                        }
                        .oldPrice{
                            text-decoration: line-through;
                        }
                    }
                }
                &::after{
                    content: '';
                    display: block;
                    clear: both;
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