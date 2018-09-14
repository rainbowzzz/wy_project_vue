<template>
  <div>
    <header class="see_header">
      <router-link to="msite">
        <i class="iconfont icon-shouye-1"></i>
      </router-link>

      <div class="header_img">
        <img src="./img/1.png" alt="" class="wy_img">
      </div>

      <span class="item_icon sousuo">
          <i class="iconfont icon-sousuo"></i>
          <i class="iconfont icon-tubiaozhizuomoban"></i>
      </span>

    </header>

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
    font-size 16px
    .header_img
      width 224px
      text-align center
      img
        width (170/$rem)
        height (55/$rem)
    .iconfont
      font-size 28px
    >span
      display flex
      flex-direction row
      justify-content flex-end
      >i
        margin-left 5px

</style>
