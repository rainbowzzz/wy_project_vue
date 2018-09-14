<template>

  <div>
    <div class="shopping_select" v-for="(good,index) in cateList" :key="index">
      <div class="shopping_title">{{good.name}}</div>
      <ul class="shopping_content">
          <li v-for="(item,index) in good.itemList" :key="index">
            <div class="img_common">
              <img :src="item.primaryPicUrl" alt="">
              <div>{{item.name}}</div>
            </div>
            <div class="content">
              <span class="full_fold">满折</span>
              <span class="brief">{{item.simpleDesc}}</span>
              <span class="money">￥{{item.retailPrice}}</span>
            </div>

          </li>

        </ul>

    </div>
  </div>


</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$store.dispatch('getCateList')
    },
    computed:{
      ...mapState(['cateList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .shopping_select
    width 100%
    margin-top 15px
    font-size 16px
    .shopping_title
      display flex
      align-items center
      justify-content center
    .shopping_content
      float left
      >li
        width 45%
        margin 6px 8px
        float left
        .img_common
          width 100%
          background-color #f4f4f4;
          >img
            width 100%
            height 100%
          >div
            background-color #F1ECE2
            font-size 12px
            color #9F8A60
            display flex
            width 100%
            height 30px
            text-align center
            line-height 30px


        .content
          width 100%
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          >span
            display block
            margin-top 5px

          .full_fold
            width 50px
            height 20px
            line-height 20px
            text-align center
            font-size 12px
            color #fff
            background-color coral
          .brief
            font-size 12px
          .money
            font-size 14px
            color lightcoral


</style>
