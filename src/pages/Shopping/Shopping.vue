<template>
  <div class="shopping">
    <header class="shopping_header">
      <span class="shop">购物车</span>
      <span class="get">领劵</span>
    </header>
    <div class="content">
      <span class="item_icon">
        <i class="iconfont icon-yuandian-copy"></i>
        30天无忧退货
      </span>
      <span class="item_icon">
        <i class="iconfont icon-yuandian-copy"></i>
        48小时快速退款
      </span>
      <span class="item_icon">
        <i class="iconfont icon-yuandian-copy"></i>
        满88元免包邮
      </span>
    </div>
    <div class="login_content">
      <div class="shopping_cart">
        <div class="ico">
          <i class="iconfont icon-qicheqianlian-"></i>
        </div>
        <div class="add">去添加点什么吧</div>

          <div class="login" @click="$router.replace('/profile')">登录</div>

      </div>


    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .shopping
    width 100%
    height 100%
    background-color #f4f4f4
    .shopping_header
      width 100%
      position fixed
      top 0
      left 0
      height (87/$rem)
      background-color #fff
      .get
       position absolute
       top (36/$rem)
       color red
       font-size (28/$rem)
       right 10%
      .shop
        position absolute
        top (30/$rem)
        font-size (36/$rem)
        left 42%


    .content
      position absolute
      top (87/$rem)
      width 100%
      display flex
      flex-direction row
      justify-content center
      align-items center
      flex-wrap nowrap
      .item_icon
        color #333
        display flex
        flex-direction row
        flex 3
        justify-content space-around
        flex-wrap nowrap
        font-size (24/$rem)
        margin-top (20/$rem)
        .iconfont
          font-size (24/$rem)
    .login_content
      width 100%
      height 40%
      position relative
      top 27%
      left 0


      .shopping_cart
        display flex
        flex-direction column
        justify-content center
        align-items center
        color #999;
        div
          margin-top (20/$rem)
          .iconfont
            font-size (190/$rem)
        .add
          margin-top (10/$rem)
          font-size (28/$rem)
        .login
          margin-top (30/$rem)
          font-size (32/$rem)
          width (400/$rem)
          text-align center
          line-height (92/$rem)
          background-color #b4282d
          height (92/$rem)
</style>
