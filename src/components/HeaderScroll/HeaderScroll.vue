<template>
  <div>
    <div class="shop_scroll_row">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(focus,index) in focusList" :key="index">
            <a href="javascript:;" class="lint_to_shop">
              <div class="shop_conyainer">
                <img :src="focus.picUrl" alt="">
              </div>
            </a>
          </div>






        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <div class="fixed_content">
      <div class="fixed_icon">
           <span class="item_icon">
            <i class="iconfont icon-renzheng"></i>
          </span>
        <span class="wy_content">网易自营品牌</span>
      </div>
      <div class="fixed_icon">
           <span class="item_icon">
            <i class="iconfont icon-renzheng"></i>
          </span>
        <span class="wy_content">30天无忧退货</span>
      </div>
      <div class="fixed_icon">
           <span class="item_icon">
            <i class="iconfont icon-renzheng"></i>
          </span>
        <span class="wy_content">48小时快速退款</span>
      </div>
    </div>
  </div>

</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    mounted(){
//      var mySwiper =

      this.$store.dispatch('getFocusList',()=>{
        this.$nextTick(()=> {
          new Swiper ('.swiper-container', {
            //autoplay:true,
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
    },
    computed:{
      ...mapState(['focusList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .swiper-container
    width 100%
    height 192px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        img
          width 100%
          height 100%
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774


  .fixed_content
    clearFix()
    margin-top 5px
    width 100%
    height 35px
    .fixed_icon
      float left
      width 33%
      height 100%
      text-align center
      line-height 100%
      .item_icon
        display inline-block
        margin-left 20px
        .iconfont
          font-size 12px
          color lightcoral
      .wy_content
        font-size 12px
        color #333



</style>
