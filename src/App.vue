<template>
  <div id="app">
    <router-view></router-view>  
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods:{
    //获取用户登录信息
    getUser(){
      this.axios.get('/user').then((res={})=>{
        //保存到Vuex
        // this.$store.dispatch('saveUserName',res.username)
        this.saveUserName(res.username)
      })
    },
    getCartCount(){
      this.axios({
        method:'get',
        url:'/carts/products/sum'
      }).then((res)=>{
        this.$store.dispatch('saveCartCount',res)
      })
    },
    ...mapActions({
      saveUserName:'saveUserName'
    })
  },
  mounted(){
    // if(this.$cookie.get('userId')){
      this.axios.defaults.baseURL = '/api'
      this.getUser()
      this.getCartCount()
    // } 
  }
  
}
</script>

<style lang="scss">
@import './assets/scss/config.scss';
@import './assets/scss/reset.scss';
@import './assets/scss/button.scss';
</style>
