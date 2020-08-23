<template>
    <div class="SecKill">
        <div class="title-wrapper">
            <h3 class="introduce">小米闪购</h3>
            <div class="options">
                <span class="prev iconfont" @click="lflag&&toPrev()" :class="{leftgoods:!lflag}">&#xe685;</span>
                <span class="next iconfont" @click="rflag&&toNext()" :class="{rightgoods:!rflag}">&#xe688;</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="left">
                <div class="info-wrapper">
                    <p class="round">10:00 场</p>
                    <span class="logo iconfont">&#xe87a;</span>
                    <p class="desc">{{(hou == 0 && minu == 0 && second == 0) == true ?  '本场已结束' : '本场剩余时间'  }}</p>
                    <div class="time-rest">
                        <span class="time">{{ (hou - 10) >= 0 ? hou : '0'+hou }}</span>
                        <span class="mark">:</span>
                        <span class="time">{{ (minu - 10) >= 0 ? minu : '0'+minu }}</span>
                        <span class="mark">:</span>
                        <span class="time">{{ (second - 10) >= 0 ? second : '0'+second}}</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <ul class="goods-list" id="SecKill" >
                    <li class="goods-item" v-for="item of lists" :key="item.id" :class="{ first : item.id % 5 == 0 , second : item.id % 5 == 1 , third : item.id % 5 == 2 , forth : item.id % 5 == 3 , fifth : item.id % 5 == 4}">
                        <a href="">
                            <div class="content">
                                <div class="img-wrapper">
                                    <img :src=item.img alt="">
                                </div>
                                <p class="title">{{item.title}}</p>
                                <p class="desc">{{item.desc}}</p>
                                <div class="price">
                                    <span class="newPrice">{{item.newPrice}}元</span>
                                    <del class="oldPrice">{{item.oldPrice}}元</del>
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
    name:"Seckill",
    props:{
        lists:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            lflag:false,
            rflag:true,
            finalValue: 0,
            singalMoveCount: 0,
            totalCount:0,
            leftCount:0,
            rightCount:0,
            hou:8,
            minu:0,
            second:0,
            isFirstTime:true,   // 是否为倒计时开始
            minuInital:false,
            houInital: false
        }
    },
    watch:{
        lists(newValue){
            this.totalCount = newValue.length
            if(this.totalCount>4){
                this.rightCount = this.totalCount - 4
            }
        }
    },
    methods:{
        toPrev(){
            if(this.leftCount == 0){
                this.singalMoveCount = 0
                this.lflag = false
                this.rflag = true
                return ;
            }else if(this.leftCount > 0){
                this.lflag = true
                this.rflag = true
                this.rightCount += this.leftCount >= 4 ? 4 : this.leftCount
                this.singalMoveCount = this.leftCount >= 4 ? 4 : this.leftCount
                this.leftCount -= this.leftCount >= 4 ? 4 : this.leftCount
                if(this.leftCount == 0){
                    this.lflag = false
                }
            }
            this.finalValue += 248*this.singalMoveCount
            var wrapper = document.querySelector("#SecKill")
            wrapper.style.transform = `translateX(${this.finalValue}px)`
            console.log(wrapper.style.transform)
            console.log('next',this.leftCount,this.rightCount)
        },
        toNext(){
            if(this.rightCount == 0 ){
                this.singalMoveCount = 0
                this.lflag = true
                this.rflag = false
                return ;
            }else if(this.rightCount > 0){
                this.lflag = true
                this.rflag = true
                this.leftCount += this.rightCount >= 4 ? 4 : this.rightCount
                this.singalMoveCount = this.rightCount >=4 ? 4 : this.rightCount
                this.rightCount -= this.rightCount >= 4 ? 4 : this.rightCount
                if(this.rightCount == 0){
                    this.rflag = false
                }
            }
            this.finalValue -= 248*this.singalMoveCount
            var wrapper = document.querySelector("#SecKill")
            wrapper.style.transform = `translateX(${this.finalValue}px)`
            console.log(wrapper.style.transform)
            console.log('prev',this.leftCount,this.rightCount)
        },
        calculateSec(){
            let myDate = new Date()
            let myHour = myDate.getHours()
            let myMinute = myDate.getMinutes()
            let mySecond = myDate.getSeconds()
            if(myHour >= 10 && myMinute >= 0 && myHour <= 18){
                this.$nextTick(function(){
                    console.log(`测试 ${myHour}时 ${myMinute}分 ${mySecond}秒`)
                    // 判断是否为倒计时的第一次操作
                    // 因为是通过和系统时间来进行比较进行循环
                    // 当秒钟为0时 不应该开始将模板的数据进行操作
                    if(mySecond > 0) this.isFirstTime = false
                    
                    if(!this.isFirstTime){
                        // 判断秒钟
                        if(this.hou != 0 || this.minu != 0 || this.second != 0){
                            if(this.second == 0) {
                                this.second = 60
                                this.minuInital = true
                            }
                            this.second -= 1
                        }
                        // 判断分钟
                        if((this.hou != 0 || this.minu != 0 )&& this.minuInital == true){
                            if(this.minu == 0){
                                this.minu = 60
                                this.houInital = true
                            }
                            this.minu -= 1
                            this.minuInital = false
                        } 
                        // 判断小时
                        if(this.hou != 0 && this.houInital){
                            this.hou -= 1
                            this.houInital = false
                        }
                        console.log(`${this.hou}时 ${this.minu}分 ${this.second}秒`)
                    }
                })
            }
        },
        startCirculation(){
            setInterval(this.calculateSec,1000)
        }
    },
    mounted(){
        this.startCirculation()
    },
    destroyed(){
        clearInterval(this.calculateSec)
    }
}
</script>

<style lang="scss">
    .SecKill{
        .title-wrapper{
            position: relative;
            .introduce{
                display: inline-block;
                font-weight: 500;
                font-size: 22px;
                line-height: 40px;
                height: 40px;
            }
            .options{
                position: absolute;
                bottom: -3px;
                right: 0px;
                margin-bottom: 10px;
                .leftgoods{
                    cursor: default;
                    &.iconfont{
                        color: rgb(224,224,224);
                    }
                }
                .rightgoods{
                    cursor: default;
                    &.iconfont{
                        color: rgb(224,224,224);
                    }
                }
                span{
                    text-align: center;
                    display: inline-block;
                    width: 24px;
                    padding: 4px 5px;
                    cursor: pointer;
                    border: 1px solid #e0e0e0;
                    &:hover{
                        color: #ff6700;
                        &.iconfont{
                            transition: color .25s;
                        }
                    }
                }
                .iconfont{
                    font-size: 16px;
                    font-weight: 400;
                    color: #b0b0b0;
                    transition: color .25s;
                }
            }
        }
        .wrapper{
            .left{
                float: left;
                .info-wrapper{
                    width: 234px;
                    height: 300px;
                    padding-top: 29px;
                    text-align: center;
                    background-color: #f1eded;
                    border-top: 1px solid #e53935;
                    .round{
                        color: #ef3a3b;
                        font-size: 21px;
                        padding-top: 15px;
                    }
                    .logo{
                        display: inline-block;
                        height: 53px;
                        width: 34px;
                        line-height: 53px;
                        font-size: 40px;
                        margin: 25px 0;
                        color: rgb(212,72,62);
                    }
                    .desc{
                        color: rgba(0,0,0,.54);
                        font-size: 15px;
                    }
                    .time-rest{
                        margin: 28px 33px 0 33px;
                        .time{
                            display: inline-block;
                            background-color: #605751;
                            color: #fff;
                            font-size: 24px;
                            line-height: 46px;
                            width: 46px;
                        }
                        .mark{
                            display: inline-block;
                            color: #605751;
                            font-size: 24px;
                            height: 46px;
                            line-height: 46px;
                            width: 15px;
                        }
                    }
                }
            }
            .right{
                float: left;
                height: 330px;
                width: 992px;
                overflow: hidden;
                .goods-list{
                    height: 330px;
                    display: flex;
                    transition: transform 0.8s cubic-bezier(0, 0.64, 0.66, 1.01);
                }
                .goods-item{
                    float: left;
                    // display: inline-block;
                    margin-left: 14px;
                    background-color: #fff;
                    border-top: 1px solid #ffac13;
                    a{
                        padding-top: 29px;
                        .content{
                            padding-top: 29px;
                            height: 300px;
                            width: 234px;
                            text-align: center;
                            color: #333;
                            .img-wrapper{
                                margin: 0 37px 22px 37px;
                                img{
                                    width: 160px;
                                    height: 166px;
                                }
                            }
                            p{
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .title{
                                font-size: 14px;
                                font-weight: 400;
                                margin: 0 20px 3px 20px;
                            }
                            .desc{
                                height: 18px;
                                margin: 0 20px 12px;
                                color: #b0b0b0;
                            }
                            .newPrice{
                                color: #ff6700;
                                margin-right: 8px;
                                font-size: 14px;
                            }
                            .oldPrice{
                                color: #b0b0b0;
                                font-size: 14px;
                            }
                        }
                    }
                }
                .first{
                    border-top: 1px solid #ffac13;
                }
                .second{
                    border-top: 1px solid #83c44e;
                }
                .third{
                    border-top: 1px solid #2196f3;
                }
                .forth{
                    border-top: 1px solid #e53935;
                }
                .fifth{
                    border-top: 1px solid #00c0a5;
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