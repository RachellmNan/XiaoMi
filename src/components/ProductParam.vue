<template>
    <div class="param" >
        <div class="param-wrapper" :class="{fixContainier:fix}">
            <div class="param-container" >
                <div class="title-wrapper">
                    <p>{{title}}</p>
                </div>
                <div class="options-wrapper">
                    <a href="javascript:;" class="mark">概述</a><span>|</span>
                    <a href="javascript:;" class="info mark">参数</a><span>|</span>
                    <a href="javascript:;" class="mark">F码通道</a><span>|</span>
                    <a href="javascript:;" class="mark">咨询客服</a><span>|</span>
                    <a href="javascript:;" class="mark">用户评价</a><span>|</span>
                    <a href="javascript:;" class="buy" @click="buy">立即购买</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'ProductParam',
    props:{
        title:{
            type:String,
            default : ''
        }
    },
    data(){
        return {
            fix : false
        }
    },
    methods:{
        getHeight(){
            let top = window.pageYOffset || document.documentElement.offsetTop || document.body.offsetTop
            this.fix = top > 140
        },
        buy(){
            let id = this.$route.params.id
            this.$router.push(`/detail/${id}`)
        }
    },
    mounted(){
        window.addEventListener('scroll',this.getHeight)
    },
    destroyed(){
        window.removeEventListener('scroll',this.getHeight,false)
    }
}
</script>

<style lang="scss">
    .param{
        border-top: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        box-shadow: 0px 5px 5px rgba(0,0,0,.07);
        height: 60px;
        .param-wrapper{
            width: 100%;
            &.fixContainier{
                position: fixed;
                z-index: 10;
                top: 0;
                left: 0;
                width: 100%;
                box-shadow: 0px 5px 5px rgba(0,0,0,.07);
                background-color: #fff;
            }
        }
        .param-container{
            width: 1226px;
            line-height: 60px;
            min-width: 1226px;
            margin: auto;
            display: flex;
            justify-content: space-between;
            .title-wrapper{
                font-size: 18px;
            }
            .options-wrapper{
                display: flex;
                align-items: center;
                font-size: 14px;
                a{
                    color: #616161;
                    margin: 0 6px;
                    
                }
                .mark{
                    &:hover{
                        color: #ff6700;
                    }
                }
                span{
                    margin: 0 7px;
                    color: #e0e0e0;
                }
                .info{
                    color: #ff6700;
                }
                .buy{
                    display: inline-block;
                    text-align: center;
                    background-color: #ff6700;
                    color: #fff;
                    width: 120px;
                    line-height: 30px;
                }
            }
        }
    }
</style>