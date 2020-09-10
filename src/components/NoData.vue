<template>
    <div class="no-data">
        <img src="/imgs/icon-no-data.png" alt="">
        <p>当前暂无提交的订单记录</p>
    </div>
</template>

<script>
export default {
    name:'NoData'
}
</script>

<style lang="scss">
    .no-data{
        padding-top: 90px;
        text-align: center;
        img{
            display: inline-block;
            padding-bottom: 30px;
            width: 300px;
        }
        p{
            font-size: 20px;
        }
    }
</style>