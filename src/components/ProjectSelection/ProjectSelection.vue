<template>
  <div class="special_content">
    <div class="brand_title">
      专题精选
      <span class="item_icon">
            <i class="iconfont icon-rightarrow"></i>
          </span>
    </div>
    <div class="special_food">
      <ul class="food_list">
        <li v-for="(food,index) in topicList" :key="index">
          <div class="food_fengli">
            <img :src="food.itemPicUrl" alt="">
            <div class="food_content">
              <span>{{food.subtitle}}</span>

              <span class="fengli_span">{{food.title}}</span>
              <span class="money">{{food.topicId}}元起</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.special_food',{
          click:true,
          scrollX:true
        })
      })
    },
    methods:{

    },
    computed:{
      ...mapState(['topicList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"
  .special_content
    margin-top 20px
    width 100%
    .brand_title
      width 100%
      display flex
      flex-direction row
      align-items center
      justify-content center
      color #333
      font-size 16px
      .item_icon
        display inline-block
        margin-left 20px
        .iconfont
          font-size 14px
    .special_food
      width 74%
      height 218px
      margin 5px 10px
      .food_list
        float left
        height 100%
        white-space nowrap
        >li
          width 276px
          display inline-block
          margin-right 5px
          .food_fengli
            width 100%
            img
              width 100%
              height 155px
            .food_content
              clearFix()
              width 100%
              position relative
              >span
                margin-top 5px
                display block
                width 75%
                height 16px
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
              .fengli_span
                color #7e8c8d
                font-size 12px
              .money
                top 0px
                left 207px
                font-size 14px
                color crimson
                position absolute





</style>
