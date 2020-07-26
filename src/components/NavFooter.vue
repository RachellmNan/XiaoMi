<template>
    <div class="NavFooter">
        <div class="container">
            <div class="service">
                <div class="service-item">
                    <span class="iconfont">&#xe624;</span>
                    <span class="content">预约维修服务</span>
                </div>
                <div class="service-item">
                    <span class="iconfont">&#xe61f;</span>
                    <span class="content">7天无理由退货</span>
                </div>
                <div class="service-item">
                    <span class="iconfont">&#xe606;</span>
                    <span class="content">15天免费换货</span>
                </div>
                <div class="service-item">
                    <span class="iconfont">&#xe697;</span>
                    <span class="content">满99包邮</span>
                </div>
                <div class="service-item">
                    <span class="iconfont">&#xe62b;</span>
                    <span class="content">520余家售后网点</span>
                </div>
            </div>
            <div class="service-menu">
                <div class="menu-list">
                    <dl class="menu-item">
                        <dt class="detail">帮助中心</dt>
                        <dd class="detail">账户管理</dd>
                        <dd class="detail">购物指南</dd>
                        <dd class="detail">订单操作</dd>
                    </dl>
                    <dl class="menu-item">
                        <dt class="detail">服务支持</dt>
                        <dd class="detail">售后政策</dd>
                        <dd class="detail">自助服务</dd>
                        <dd class="detail">相关下载</dd>
                    </dl>
                    <dl class="menu-item">
                        <dt class="detail">线下门店</dt>
                        <dd class="detail">小米之家</dd>
                        <dd class="detail">服务网点</dd>
                        <dd class="detail">授权体验店</dd>
                    </dl>
                    <dl class="menu-item">
                        <dt class="detail">关于小米</dt>
                        <dd class="detail">了解小米</dd>
                        <dd class="detail">加入小米</dd>
                        <dd class="detail">投资者关系</dd>
                        <dd class="detail">企业社会责任</dd>
                        <dd class="detail">廉洁举报</dd>
                    </dl>
                    <dl class="menu-item">
                        <dt class="detail">关注我们</dt>
                        <dd class="detail">新浪微博</dd>
                        <dd class="detail">官方微信</dd>
                        <dd class="detail">联系我们</dd>
                        <dd class="detail">公益基金会</dd>
                    </dl>
                    <dl class="menu-item">
                        <dt class="detail">特色服务</dt>
                        <dd class="detail">F码通道</dd>
                        <dd class="detail">礼物码</dd>
                        <dd class="detail">防伪查询</dd>
                    </dl>
                </div>
                <div class="service-info">
                    <p class="phone">
                        <span>400-100-5678</span>
                    </p>
                    <p class="time">
                        <span>8:00-18:00（仅收市话费)</span>
                    </p>
                    <div class="cheat">
                        <span class="iconfont"></span>
                        <span>人工客服</span>
                    </div>
                    <div class="connect">
                        <span>关注小米</span>
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'NavFooter'
}
</script>

<style lang="scss">
@import '../assets/scss/config.scss';
    .container{
        width: 1226px;
        margin: auto;
        .service{
            padding: 27px 0;
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid $colorC;
            .service-item{
                display: inline-block;
                font-size: 18px;
                position: relative;
                cursor: pointer;
                .iconfont{
                    font-size: 28px;
                    margin-left: 20px;
                    margin-right: 10px;
                }
                .content{
                    margin-right: 50px;
                }
                &::after{
                    content: '';
                    display: block;
                    position: absolute;
                    right: 0;
                    top: 10%;
                    height: 80%;
                    border-right: 1px solid $colorC;
                }
                &:last-child::after{
                    display: none;
                }
            }
        }
        .service-menu{
            padding: 40px 0;
            .menu-list{
                display: flex;
                justify-content: space-around;
                width: 960px;
                position: relative;
                .menu-item{
                    width: 160px;
                    dt{
                        font-size: 14px;
                        margin-bottom: 26px;
                        line-height: 1.25;
                    }
                    dd{
                        margin-top: 10px;
                    }
                    &:last-child::after{
                        content: '';
                        display: block;
                        position: absolute;
                        right: 22px;
                        top: 0;
                        height: 111px;
                        border-right: 1px solid $colorC;
                    }
                }
            }
        }
    }
</style>