<template>
    <div class="login">
        <div class="container">
            <div class="header">
                <div class="img-wrapper">
                    <img src="/imgs/login/logo.png" alt="">
                </div>
            </div>
            <div class="body">
                <div class="body-wrapper">
                    <div class="info-wrapper">
                        <div class="option-group">
                            <a class="account-login">账号登录</a>
                            <span></span>
                            <a>扫码登录</a>
                        </div>
                        <div class="account-group">
                            <input type="text" placeholder="账号:summer or 使用注册功能" v-model="username">
                            <input type="password" placeholder="密码:summer" v-model="password">
                            <p class="submit" @click="login">登录</p>
                            <p class="extra" @click="register">手机短信登录/注册</p>
                            <div class="other-group">
                                <span>立即注册</span>
                                <span>|</span>
                                <span>忘记密码？</span>
                            </div>
                            <div class="login-list">
                                <div class="bar">
                                    <p>其它方式登录</p>
                                </div>
                                <span class="iconfont qq">&#xe73e;</span>
                                <span class="iconfont wb">&#xe73c;</span>
                                <span class="iconfont zfb">&#xe60a;</span>
                                <span class="iconfont wx">&#xe61a;</span>
                            </div>
                        </div>
                        <div class="scan-group"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'login',
    data(){
        return {
            username:'summer',
            password:'summer'
        }
    },
    methods:{
        login(){
            this.axios.post('/user/login',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                this.userId = res.id
                this.$cookie.set('userId',res.id,{expires:'7D'})
                console.log('登录成功',res)
                this.$router.push('/index')
            })
        },
        register(){
            this.axios.post('/user/register',{
                username:this.username,
                password:this.password,
                email:`${this.username}@qq.com`
            }).then((res)=>{
                alert('注册成功')
                console.log('注册成功',res)
            })
        }
    }
}
</script>

<style lang="scss">
    .container{
        width: 1129px;
        margin: 0 auto;
        min-width: 1129px;
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
            .body-wrapper{
                position: absolute;
                width: 1260px;
                height: 588px;
                margin: 0 auto;
            }
            .info-wrapper{
                position: absolute;
                width: 410px;
                top: 32px;
                right: 0px;
                background-color: #fff;
                .option-group{
                    text-align: center;
                    padding: 27px 0 24px;
                    font-size: 24px;
                    span{
                        display: inline-block;
                        width: 0px;
                        height: 28px;
                        margin: 0 35px 0 42px;
                        border: 1px solid #e0e0e0;
                        vertical-align: middle;
                    }
                    a{
                        vertical-align: middle;
                    }
                    .account-login{
                        color: #ff6700;
                    }
                }
                .account-group{
                    input{
                        display: block;
                        width: 314px;
                        height: 22px;
                        border: 1px solid #e0e0e0;
                        padding: 13px 16px;
                        margin: 0px auto 14px;
                    }
                    .submit{
                        width: 348px;
                        height: 50px;
                        line-height: 50px;
                        margin: 30px auto 14px;
                        text-align: center;
                        color: #fff;
                        font-size: 14px;
                        background-color: #ff6700;
                        cursor: pointer;
                    }
                    .extra{
                        width: 348px;
                        text-align: center;
                        color: #ff6700;
                        font-size: 15px;
                        margin: 0px auto 30px;
                        cursor: pointer;
                    }
                    .other-group{
                        width: 348px;
                        font-size: 14px;
                        text-align: center;
                        margin: auto;
                        line-height: 16px;
                        height: 16px;
                        span{
                            vertical-align: middle;
                            color: #999;
                            margin: 0px 5px;
                        }
                    }
                    .login-list{
                        margin-top: 143px;
                        width: 348px;
                        margin: 143px auto 0px;
                        text-align: center;
                        .bar{
                            &::before{
                                margin-right: 5px;
                                width: 122px;
                                height: 0;
                                display: inline-block;
                                content: '';
                                border-top: 1px solid #e0e0e0;
                                vertical-align: middle;
                            }
                            &::after{
                                margin-left: 5px;
                                width: 122px;
                                height: 0;
                                display: inline-block;
                                content: '';
                                border-top: 1px solid #e0e0e0;
                                vertical-align: middle;
                            }
                            p{
                                font-size: 14px;
                                color: #bbb;
                                display: inline-block;
                                margin-bottom: 15px;
                            }
                        }
                        span{
                            display: inline-block;
                            margin: 0 17px;
                            font-size: 30px;
                        }
                        .qq{
                            color: #3888cb;
                        }
                        .wb{
                            color: #c33f38;
                        }
                        .zfb{
                            color: #49a8e8;
                        }
                        .wx{
                            color: #5fce3f;
                        }
                    }
                }
            }
        }
    }
</style>