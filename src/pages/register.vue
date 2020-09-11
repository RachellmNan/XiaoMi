<template>
    <div class="register">
        <div class="container">
            <div class="img-wrapper">
                <a href="/#/index">
                    <img src="/imgs/logo-mi.png" alt="">
                </a>
            </div>
            <div class="title-wrapper">
                <p>注册小米账号</p>
            </div>
            <div class="username-wrapper box">
                <p class="category">账号</p>
                <div class="detail-wrapper">
                    <input type="text" placeholder="账号" v-model="username">
                </div>
                
            </div>
            <div class="password-wrapper box">
                <p class="category">密码</p>
                <div class="detail-wrapper">
                    <input type="password" placeholder="密码" v-model="password">
                </div>
            </div>
            <div class="submit-wrapper" @click="register">
                立即注册
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'register',
    data(){
        return {
            username:'',
            password:''
        }
    },
    methods:{
        register(){
            if(this.username && this.password){
                this.axios.post('/user/register',{
                    username:this.username,
                    password:this.password,
                    email:`${this.username}@qq.com`
                }).then(()=>{
                    this.$message({
                        showClose:true,
                        message: '注册成功',
                        type:'success',
                        duration:1500
                    })
                    this.login()
                })
            }else{
                this.$message.warning('请将用户名 or 密码 填写完成')
            }
        },
        // 注册后，进行登录，给vuex中的 username，cartcount 赋值
        login(){
            this.axios.post('/user/login',{
                username:this.username,
                password:this.password
            }).then((res)=>{
                this.userId = res.id
                this.$cookie.set('userId',res.id,{expires:'1D'})
                this.$store.dispatch('saveUserName',this.username)
                this.$store.dispatch('saveCartCount',0)
                this.$router.push('/index')
            })
        }
    }
}
</script>

<style lang="scss">
    .register{
        position: fixed;
        width: 100%;
        height: 766px;
        background-color: rgb(249,249,249);
        .container{
            width: 785px;
            height: 522px;
            margin-top: 60px;
            padding: 0px 34px 30px;
            background-color: #fff;
            margin: autoo;
            .img-wrapper{
                height: 48px;
                margin-bottom: 40px;
                text-align: center;
                img{
                    display: inline-block;
                    height: 48px;
                }
            }
            .title-wrapper{
                text-align: center;
                font-size: 30px;
                margin-bottom: 40px;
            }
            .box{
                width: 300px;
                margin: auto;
                margin-bottom: 30px;
                .category{
                    height: 40px;
                    font-size: 20px;
                }
                .detail-wrapper{
                    height: 30px;
                    border: 1px solid #b0b0b0;
                    input{
                        display: inline-block;
                        width: 283px;
                        padding-left: 15px;
                        height: 30px;
                        line-height: 30px;
                        border: none;
                    }
                }
            }
            .submit-wrapper{
                width: 300px;
                margin: auto;
                color: #fff;
                line-height: 50px;
                text-align: center;
                margin-top: 40px;
                cursor: pointer;
                background-color: #ff6700;
            }
        }
    }
</style>