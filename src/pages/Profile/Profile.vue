<template>
  <div class="profile_container">

    <Header/>

    <div class="profile_content">
      <div class="yx_img">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <Login/>
      <div class="register">手机号快速注册 ></div>
       </div>
    <div class="share">
      <div class="ico">
        <span class="item">
          <i class="iconfont icon-shouji"></i>
        </span>
        <span class="title">微信</span>
      </div>
      <div class="ico">
        <span class="item">
          <i class="iconfont icon-QQ"></i>
        </span>
        <span class="title">QQ</span>
      </div>
      <div class="ico weibo">
        <span class="item">
          <i class="iconfont icon-weibo2"></i>
        </span>
        <span class="title">微博</span>
      </div>

    </div>

  </div>
</template>
<script>
  import Header from "../../components/CommonHeader/CommonHeader.vue"
  import Login from '../../pages/Login/Login.vue'

  export default {
    data() {
      return {}
    },
    components:{
      Header,
      Login
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .profile_container
    height 100%
    .see_header
      bottom-border-1px(#e4e4e4)
      width 100%
      height (88/$rem)
      position fixed
      left 0
      top 0
      background-color #fff
      z-index 100
      display flex
      flex-direction row
      justify-content space-around
      flex 3
      align-items center
      font-size (32/$rem)
      .header_img
        width (448/$rem)
        text-align center
        img
          width (170/$rem)
          height (55/$rem)
      .iconfont
        font-size (56/$rem)
      >span
        display flex
        flex-direction row
        justify-content flex-end
        >i
          margin-left (10/$rem)

    .profile_content
      position relative
      top (88/$rem)
      width 100%
      height 100%
      background-color #f4f4f4
      font-size (24/$rem)
      .yx_img
        width 100%
        display flex
        justify-content center
        align-items center
        position absolute
        top 20%

        >img
          height (90/$rem)
          width (270/$rem)

      .register
        display flex
        position absolute
        top 53%
        left 4%
        color #333
        font-size (28/$rem)
        justify-content center
        width 100%
    .share
      position absolute
      bottom 10%
      width 100%
      display flex
      font-size (32/$rem)
      justify-content center
      flex-direction row
     .ico
       display flex
       color #7F7F7F
       width (170/$rem)
       height (40/$rem)
       justify-content center
       flex-direction row
       border-right (2/$rem) solid #7F7F7F
       >span
        display flex
      .item
        font-size (24/$rem)
      .title
        margin-left (10/$rem)
      .weibo
          border-right none

</style>
