<template>
  <div>
    <router-view></router-view>
    <div class="login" >
      <div class="phone_img">
          <span class="item">
             <i class="iconfont icon-shouji"></i>
          </span>
        <router-link to="/phone">
          <span class="phone">手机号码登陆</span>
        </router-link>
      </div>

      <div class="email_img">
          <span>
            <i class="iconfont icon-youxiang"></i>
          </span>
        <router-link to="/email">
          <span class="email">邮箱账号登陆</span>
        </router-link>

      </div>




    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        login_verify:true
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .login
    position absolute
    top 34%
    left 12%
    width 100%
    color #fff
    text-align center
    .phone_img
      width 80%
      height 47px
      line-height 47px
      background-color #b4282d
      margin-bottom 15px
      display flex
      flex-direction row
      align-items center
      justify-content center
      font-size 16px
      >span
        margin-left 5px
      .phone
        color #fff

    .email_img
      width 80%
      height 47px
      line-height 47px
      color #b4282d
      border 1px solid #b4282d
      background-color transparent
      display flex
      flex-direction row
      align-items center
      justify-content center
      font-size 16px
      >span
        margin-left 5px
      .email

        color #b4282d


</style>
