<template>
  <div>
    <div class="row_scroll">
      <ul class="article">
        <li class="article_list" v-for="(essay,index) in article" :key="index">
          <img :src="essay.picUrl" alt="">
          <span class="article_title">{{essay.articleCount}}</span>
          <span class="article_detail">{{essay.title}}</span>
        </li>

      </ul>
    </div>

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

        new BScroll('.row_scroll',{
          click:true,
          scrollX:true
        })
        this.$store.dispatch('getArticle')
      })
    },
    computed:{
      ...mapState(['article'])
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .row_scroll
    width 100%
    margin 10px 0
    .article
      float left
      white-space nowrap
    .article_list
      display inline-block
      margin-left (20/$rem)
      position relative
      img
        width (164/$rem)
        height (164/$rem)
      .article_title
        font-size (12/$rem)
        color #fff
        position absolute
        top 0px
        right 0px
        font-weight bold
      .article_detail
        width 100%
        color #333
        display block
        margin-top (20/$rem)
        text-align center
        font-size (12/$rem)
</style>
