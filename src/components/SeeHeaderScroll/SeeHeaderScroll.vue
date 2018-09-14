<template>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <div class="scroll_img">
            <img :src="item.picUrl" alt="">
            <div class="img_center">
              <span class="recommoned">--{{item.subTitle}}--</span>
              <span class="brief">{{item.title}}</span>
              <span class="detail">{{item.desc}}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

    </div>


</template>
<script>
  import BScroll from 'better-scroll';
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$nextTick(()=> {
        new Swiper ('.swiper-container', {
          autoplay:true,
          loop: true,
          // 如果需要分页器

        })

        this.$store.dispatch('getBanner')
      })
    },
    computed:{
      ...mapState(['banner'])
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .swiper-container
    width 100%
    height (432/$rem)
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        text-align center
        .scroll_img
          width 100%
          height 100%
          margin-top 5px
          position relative
          img
            width 90%
            height 90%
          .img_center
            position absolute
            z-index 2px
            top  24%
            left 17%
            background-color #fff
            opacity 0.7
            color #333
            width (466/$rem)
            height (198/$rem)

            >span
              display block
              margin-top (30/$rem)
            .recommoned
              font-size (12/$rem)
              color #7f7f7f
            .brief
              font-size (20/$rem)
              font-weight bold
            .detail
              font-weight bold
              font-size (14/$rem)

</style>
