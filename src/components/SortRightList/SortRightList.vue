<template>
  <div class="sort_right" v-if="categoryLeftList[index]" ref="categoryLeftList">
    <div class="sort_content">
      <div class="banner">
        <img :src="categoryLeftList[index].bannerUrl" alt="">
      </div>
      <div class="cateList">
        <div class="list">
          <div class="cateItem" v-for="(cateItem,indexCate) in categoryLeftList[index].subCateList" :key="indexCate">
            <img :src="cateItem.wapBannerUrl" alt="">
            <div class="cate_name">
              {{cateItem.name}}
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>
</template>
<script>

  import {mapState} from 'vuex'
  import BScroll from 'better-scroll';

  export default {
    props:{
      categoryLeftList:Array,
      index:Number
    },
    data() {
      return {}
    },
    mounted(){
      this.$nextTick(()=>{

      })

    },
    watch: {
      categoryLeftList() {
        this.$nextTick(()=>{
          new BScroll('.sort_right',{
            click:true,
            scrollY:true
          })
        })

      },
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .sort_right
    width 70%
    height 80%
    position absolute
    top 60px
    right 18px
    .sort_content
      width 100%
      .banner
        position relative
        width 100%
        >img
          width 100%
          border-radius 4px

      .cateList
        clearFix()
        width 100%
        .list
          width 100%
          margin-top 20px
          float left
          .cateItem
            margin-left 15px
            float left
            >img
              width (100/$rem)
              height (100/$rem)
              border-radius 100%
              background-color #fff
              display block
              margin-left 10px
              vertical-align middle
            .cate_name
              font-size 14px
              color #333
              text-align center
              line-height (72/$rem)
              width (144/$rem)
              height (72/$rem)



</style>
