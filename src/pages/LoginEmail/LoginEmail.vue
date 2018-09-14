<template>
  <div class="loginPhone">
    <div class="yx_img">
      <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
    </div>
    <div class="login_content">
      <div class="title">邮箱登录</div>
      <div class="login_form">
        <form action="">
          <div class="user">
            <input type="text" placeholder="手机号">
          </div>
          <div class="">
            <input type="text" placeholder="验证码">
          </div>
          <div class="notice">
            温馨提示：未注册网易严选帐号的手机号，登录时将自动注册，且代表已同意
            <a href="javascript:;">《用户服务协议》</a>
          </div>
          <div class="button">登录</div>
          <div class="about">关于我们</div>
        </form>

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
  .loginPhone
    width 100%
    height 100%
    position relative
    top 0
    left 0
    font-size 14px
    .yx_img
      width (600/$rem)
      height (190/$rem)
      top 10%
      left 11%
      line-height (190/$rem)
      text-align center
      position absolute
      >img
        height (90/$rem)
        width (270/$rem)


    .login_content
      width 100%
      height 100px
      position absolute
      top 24%
      left 0
      text-align center
      .title
        color #b4282d
      .login_form
        width 100%
        display flex
        justify-content center
        form
          div
            margin-top 15px
            height (94/$rem)
            width (600/$rem)
            >input
              border-radius 4px
              box-sizing border-box
              padding-left 10px
              border 1px solid #999
              height 100%
              width 100%
          .notice
            color #999
            font-size 12px
            line-height 20px
            >a
              color #b4282d
          .button
            color #fff
            text-align center
            line-height (94/$rem)
            background-color #b4282d
          .about
            color #999
            height (50/$rem)
            line-height (50/$rem)
            text-align center
            border none






</style>
