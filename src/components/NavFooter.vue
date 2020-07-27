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
                        <span class="iconfont">&#xe658;</span>
                        <span>人工客服</span>
                    </div>
                    <div class="connect">
                        <span>关注小米</span>
                        <a class="wb"/>
                        <a class="wx"/>
                    </div>
                </div>
            </div>
            <div class="info-text">
                <p class="sites">
                    <a href="">小米商城</a><span>|</span><a href="">MIUI</a><span>|</span>
                    <a href="">米家</a><span>|</span><a href="">米聊</a><span>|</span>
                    <a href="">多看</a><span>|</span><a href="">游戏</a><span>|</span>
                    <a href="">政企服务</a><span>|</span><a href="">小米天猫店</a><span>|</span>
                    <a href="">小米集团隐私政策</a><span>|</span><a href="">小米儿童信息保护规则</a><span>|</span>
                    <a href="">小米商城隐私政策</a><span>|</span><a href="">小米商城用户协议</a><span>|</span>
                    <a href="">问题反馈</a><span>|</span><a href="">Select Location</a>
                </p>
                <p class="info-detail">
                    <span>©</span>
                    <a href=""> mi.com </a>
                    <span> 京ICP证110507号 </span>
                    <a href=""> 京ICP备10046444号 </a>
                    <a href=""> 京公网安备11010802020134号 </a>
                    <a href=""> 京网文[2020]0276-042号 </a>
                    <br/>
                    <a href="">（京）网械平台备字（2018）第00005号 </a>
                    <a href=""> 互联网药品信息服务资格证 (京)-非经营性-2014-0090 </a>
                    <a href=""> 营业执照 </a>
                    <a href=""> 医疗器械质量公告 </a>
                    <br />
                    <a href=""> 增值电信业务许可证 </a>
                    <span> 网络食品经营备案（京）【2018】WLSPJYBAHF-12 </span>
                    <a href=""> 食品经营许可证 </a>
                    <br />
                    <span> 违法和不良信息举报电话：171-5104-4404 </span>
                    <a href=""> 知识产权侵权投诉 </a>
                    <span> 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试 </span>
                </p>
                <div class="info-link">
                    <a href="javascript:;">
                        <img src="/imgs/truste.png">
                    </a>
                    <a href="javascript:;">
                        <img src="/imgs/v-logo-2.png">
                    </a>
                    <a href="javascript:;">
                        <img src="/imgs/v-logo-1.png">
                    </a>
                    <a href="javascript:;">
                        <img src="/imgs/trueth.png">
                    </a>
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
                display: inline-flex;
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
            .service-info{
                float: right;
                width: 251px;
                text-align: center;
                color: #616161;
                .phone{
                    font-size: 22px;
                    color: #ff6700;
                }
                .time{
                    margin: 0 0 5px 0;
                }
                .cheat{
                    width: 120px;
                    margin: auto;
                    height: 30px;
                    line-height: 30px;
                    border: 1px solid #ff6700;
                    .iconfont{
                        font-size: 14px;
                        margin-inline-end: 5px;
                    }
                    span{
                        color: #ff6700;
                    }   
                    &:hover{
                        background-color: #ff6700;
                        span{
                                
                                color: white;
                        }
                    }
                }
                .connect{
                    margin-top: 12px;
                    .wb{
                        width: 24px;
                        height: 24px;
                        display: inline-block;
                        margin: 0px 0 0 10px;
                        vertical-align: middle;
                        background-image: url('/imgs/wb.png') ;
                        background-size: contain;
                        cursor: pointer;
                        &:hover{
                            background: url('/imgs/wb@2x.png') no-repeat;
                            background-size: contain;
                        }
                    }
                    .wx{
                        width: 24px;
                        height: 24px;
                        display: inline-block;
                        margin: 0px 0 0 10px;
                        vertical-align: middle;
                        background: url('/imgs/wx.png') no-repeat;
                        background-size: contain;
                        cursor: pointer;
                        &:hover{
                            background: url('/imgs/wx@2x.png') no-repeat;
                            background-size: contain;
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
        .info-text{
            .sites{
                margin-block-start: 14px;
                margin-block-end: 14px;
                a{
                    text-decoration: none;
                    font-size: 14px;
                    color: #757575;
                }
                span{
                    font-size: 14px;
                    margin: 0 8px;
                }
            }
            .info-detail{
                a{
                    font-size: 14px;
                    color: #757575;
                }
            }
            .info-link{
                margin-block-start: 10px;
                img{
                    margin: 0px 5px;
                }
            }
        }
    }
</style>