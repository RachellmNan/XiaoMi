<template>
    <div class="GoodsBox">
        <div class="title-wraper">
            <span class="title">家电</span>
            <span class="iconfont">&#xe625;</span>
            <span class="category-item">查看全部</span>
            <span class="category-item">热门</span>
            <span class="category-item">电视影音</span>
        </div>
        <div class="goods-wraper">
            <div class="poster" v-if="0">
                <img src="/imgs/poster/0.jpg" alt="">
            </div>
            <div class="poster" v-if="1">
                <img src="/imgs/poster/1.jpg" alt="">
                <img src="/imgs/poster/2.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"GoodsBox"
}
</script>

<style lang="scss">
    .GoodsBox{
        .title-wraper{
            .title{
                display: inline-block;
                height: 58px;
                line-height: 58px;
                font-size: 22px;
            }
            span{
                cursor: pointer;
            }
            .iconfont{
                float: right;
                display: block;
                line-height: 26px;
                margin-left: 10px;
            }
            .category-item{
                float: right;
                display: block;
                margin-left: 10px;
                font-size: 16px;
                &:hover{
                    &::after{
                        // content: '';
                        // display: block;
                        // height: 2px;
                        // background-color: #ff6700;
                        opacity: 1;
                    }
                }
                &::after{
                    content: '';
                    display: block;
                    height: 2px;
                    opacity: 0;
                    background-color: #ff6700;
                }
            }
            &::after{
                content: "";
                display: block;
                clear: both;
            }
        }
        .goods-wraper{
            .poster{
                float: left;
                img{
                    display: block;
                    width: 234px;
                    margin-bottom: 14px;
                }
            }
            &::after{
                content: "";
                clear: both;
                display: block;
            }
        }

    }
</style>