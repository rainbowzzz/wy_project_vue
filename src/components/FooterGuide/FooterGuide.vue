<template>
<div>

  <footer class="footer_guide border-1px">
    <span class="guide_item" :class="{on:'/msite'===this.$route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-shouye-1"></i>
      </span>
      <span>首页</span>
    </span>
    <span class="guide_item" :class="{on:'/see'===this.$route.path}" @click="goTo('/see')" >
        <span >
          <i class="iconfont icon-shitu"></i>
        </span>
        <span>识物</span>
      </span>
    <span class="guide_item" :class="{on:'/sort'===this.$route.path}" @click="goTo('/sort')">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span>分类</span>
     </span>
    <span class="guide_item" :class="{on:'/shopping'===this.$route.path}" @click="goTo('/shopping')">
      <span class="item_icon">
        <i class="iconfont icon-tubiaozhizuomoban"></i>
      </span>
      <span>购物车</span>
     </span>
    <span class="guide_item" :class="{on:'/profile'===this.$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-personal"></i>
      </span>
      <span>个人</span>
     </span>




  </footer>
</div>

</template>
<script>
  export default {
    data() {
      return {}
    },
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100px
    left 0px
    bottom 0px
    right 0px
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
      .iconfont
        font-size 20px

</style>
