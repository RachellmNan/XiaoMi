<template>
    <div class="login">
        <div class="container">
            <div class="header">
                <div class="img-wrapper">
                    <img src="/imgs/login/logo.png" alt="">
                </div>
            </div>
            <div class="body">
                <div class="info-wrapper">
                    <div class="option-group">
                        <span>账号登录</span>
                        <span>|</span>
                        <span>扫码登录</span>
                    </div>
                    <div class="account-group">
                        <input type="text">
                        <input type="text">
                        <p class="submit">登录</p>
                        <p class="extra">手机短信登录/注册</p>
                        <div class="other-group">
                            <span>立即注册</span>
                            <span>|</span>
                            <span>忘记密码？</span>
                        </div>
                        <div class="login-list">
                            <span class="iconfont">&#xe73e;</span>
                            <span class="iconfont">&#xe73c;</span>
                            <span class="iconfont">&#xe60a;</span>
                            <span class="iconfont">&#xe61a;</span>
                        </div>
                    </div>
                    <div class="scan-group"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'login'
}
</script>

<style lang="scss">
    .container{
        width: 1226px;
        margin: 0 auto;
        min-width: 1226px;
        .header{
            img{
                width: 200px;
            }
        }
        .body{
            position: absolute;
            background: url('/imgs/login/banner.jpg') no-repeat center;
            width: 100%;
            height: 588px;
            left: 0;
        }
    }
</style>