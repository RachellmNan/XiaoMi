<template>
    <div class="GoodBox">
        <div class="title">
            <h2>{{title}}</h2>
            <div class="more">
                <ul class="category-list">
                    <li class="item"  v-show="modal == 1">
                        <span >查看全部</span>
                        <span class="iconfont">&#xe625;</span>
                    </li>
                    <li @mouseenter="changeColor" class="item" v-for="item in GoodsList" :key="item.uid" :class="{hoverChange:item.uid == hoverId}" v-show="modal == 2" :id="item.uid">{{item.title}}</li>
                </ul>
            </div>
        </div>
        <div class="goods-container">
            <div class="img-wrapper">
                <ul >
                    <li v-show="modal == 1">
                        <a href="javascript:;">
                            <img class="singPoster" :src="singalPoster" >
                        </a>
                    </li>
                    <li class="imgGroup" v-for="item of imgGroup" :key="item.id" v-show="modal == 2">
                        <a href="javascript:;">
                            <img :src="item.imgSrc">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="good-wrapper">
                <ul class="goods-list" v-for="list in GoodsList" :key="list.uid" v-show="list.uid == hoverId">
                    <li class="goods-item" v-for="item of list.data" :key="item.id">
                        <a class="singal" href="javascript:;" v-show=" modal != 2 || item.id != 7">
                            <div class="goodsImg-wrapper">
                                <img :src="item.img">
                            </div>
                            <h3 class="title">{{item.title}}</h3>
                            <p class="desc">{{item.desc}}</p>
                            <p class="price-wrapper">
                                <span class="newPrice">{{item.DisPrice}}</span>
                                <span class="oldPrice" v-show="item.OldPrice">{{item.OldPrice}}</span>
                            </p>
                        </a>
                        <a class="complex" href="" v-show="modal == 2 && item.id == 7">
                            <div class="complex-wrapper">
                                <div class="left">
                                    <h3 class="title">{{item.title}}</h3>
                                    <p class="price">{{item.DisPrice}}起</p>
                                </div>
                                <div class="right">
                                    <img class="back_img" :src="item.img">
                                </div>
                            </div>
                        </a>
                        <a class="complex" href="" v-show="modal == 2 && item.id == 7">
                            <div class="complex-wrapper">
                                <div class="left">
                                    <h3 class="more">浏览更多</h3>
                                    <p >{{list.title}}</p>
                                </div>
                                <div class="right">
                                    <span class="iconfont">&#xe776;</span>
                                </div>
                            </div>
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
        },
        title:{
            type:String
        },
        // modal为 1是表示poster数量为1 ，当modal为2时表示poster数量为2，且最后一个item一分为二
        modal:{
            type:String
        },
        singalPoster:{
            type:String
        },
        // poster数量为2
        imgGroup:{
            type:Array
        },
    },
    data(){
        return {
            GoodsList:{},
            hoverId : 0 // 现在展示的tag
        }
    },
    watch:{
        lists(newVal){
            this.GoodsList = JSON.parse(JSON.stringify(newVal))
            console.log(this.GoodsList)
        }
    },
    methods:{
        // 当鼠标触碰tag时变色
        changeColor(){
            this.hoverId = event.target.id
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
                font-weight: 500;
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
                        border-bottom: 2px solid transparent;
                        transition: color .3s;
                        .iconfont{
                            margin-left: 10px;
                            font-size: 20px;
                            font-weight: 400;
                        }
                        &:hover{
                            color: #ff6700;
                            transition: color .3s;
                        }
                    }
                    .hoverChange{
                        color: #ff6700;
                        border-bottom: 2px solid #ff6700;
                        transition: color .3s , border-bottom .3s;
                    }
                }
            }
        }
        .goods-container{
            position: relative;
            a{
                transition: box-shadow .3s , transform .3s;
                &:hover{
                    transform: translate(0,-2px);
                    box-shadow: 0 15px 30px rgba(0,0,0,.1);
                    transition: box-shadow .3s , transform .3s;
                }
            }
            .img-wrapper{
                float: left;
                margin-bottom: 14px;
                height: 614px;
                a{
                    display: inline-block;
                    height: 614px;
                    height: 234px;
                }
                .singPoster{
                    height: 614px;
                }
                .imgGroup{
                    display: block;
                    margin-bottom: 14px;
                    height: 300px;
                    img{
                        height: 300px;
                    }
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
                    width: 234px;
                    height: 300px;
                    margin-left: 14px;
                    margin-bottom: 14px;
                    text-align: center;
                    .singal{
                        height: 260px;
                        padding: 20px 0;
                        float: left;
                        background-color: #fff;
                        color: #757575;
                    }
                    .complex{
                        .complex-wrapper{
                            background-color: #fff;
                            height: 93px;
                            padding-top: 50px;
                            margin-bottom: 14px;
                            .left{
                                float: left;
                                margin: -10px 0px 5px 30px;
                                text-align: left;
                                color: #757575;
                                .title{
                                    color: #333;
                                    font-size: 16px;
                                    font-weight: 400;
                                    margin-bottom: 5px;
                                    margin-top: 10px;
                                }
                                .price{
                                    font-size: 14px;
                                    color: #ff6700;
                                }
                                .more{
                                    color: #333;
                                    font-size: 20px;
                                    font-weight: 400;
                                }
                            }
                            .right{
                                float: left;
                                margin-left: 13px;
                                color: #ff6700;
                                margin-top: -13px;
                                .back_img{
                                    display: inline-block;
                                    height: 80px;
                                }
                                .iconfont{
                                    margin-left: 20px;
                                    font-weight: 400;
                                    font-size: 45px;
                                }
                                
                            }
                            &::after{
                                content: '';
                                clear: both;
                                display: block;
                            }
                        }
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
                    .title{
                        font-weight: 400;
                        font-size: 14px;
                        margin: 0px 10px 2px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .desc{
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
                        text-align: center;
                        .newPrice{
                            color: #ff6700;
                            margin-right: 15px;
                        }
                        .oldPrice{
                            text-decoration: line-through;
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
            &::after{
                content: '';
                display: block;
                clear: both;
            }
        }
    }
</style>