<template>
  <div class="recommend" >
    <div class="recommend_title">
      <p>为你推荐</p>
    </div>
    <div>
      <div class="recommend_header" v-if="recommend.recommendBanner">
        <img :src="recommend.recommendBanner.picUrl" alt="">
        <span class="title">{{recommend.recommendBanner.nickname}}</span>
        <div class="news">
          <span>{{recommend.recommendBanner.title}}</span>
          <span class="money">{{recommend.recommendBanner.price}}元起</span>
        </div>

      </div>
      <div class="recommend_content"  v-for="(list,index) in recommend.recommends " :key="index">
        <div class="common">
          <div class="left">
            <img :src="list.avatar" alt="">

            <span class="brief">{{list.nickname}}</span>

            <p>{{list.title}}</p>
          </div>

          <div class="right">
            <img :src="list.picUrl" alt="">
            <div class="img_title">
              <span>{{list.typeName}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>
<script>

  import {mapState} from 'vuex'
  export default {
    props:{
      /*recommend:Object,
      type:String*/
    },
    data() {
      return {}
    },
/*    mounted(){
      const type=this.type
      return type;
      console.log(type)
    },*/
    mounted() {
      this.$store.dispatch('getRecommend');

    },
    computed:{
      ...mapState(['recommend'])
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .recommend
      width 100%
      .recommend_title
        margin-top (38/$rem)
        width 100%
        padding 0px 15px
        >p
          font-size 18px
          justify-content center
          align-items center
          display flex
      .recommend_header
        clearFix()
        width 100%
        padding 0px 15px
        position relative
        >img
          margin-top 12px
          height (386/$rem)
          width (688/$rem)
        .title
          position absolute
          top 24px
          left 24px
          font-size 12px
        .news
          font-size 18px
          margin-top 10px
          >span
            float left
          .money
            margin-right 32px
            float right


      .recommend_content
        width 100%
        box-sizing border-box
        margin 30px 0 30px 10px
        .common
          border 1px solid #d9d9d9
          border-right none
          border-radius 2px
          height (274/$rem)
          width 100%
          display flex
          flex-direction row
          justify-content space-between
          align-items center
          .left
            width (408/$rem)
            padding-left 5px

            >img
              width (46/$rem)
              height (46/$rem)
              vertical-align middle
              border-radius 100%
            .brief
              vertical-align middle
              font-size 12px
              color #7e8c8d
            p
              margin-top 8px
              font-size 16px
              color #333
          .right
            width (280/$rem)
            right 10px
            position relative
            >img
              width 100%
              height (272/$rem)
            .img_title
              width (180/$rem)
              height (30/$rem)
              border-radius 5px
              text-align center
              line-height (30/$rem)
              background-color #d9d9d9
              font-size (12/$rem)
              position absolute
              top (10/$rem)
              left (10/$rem)

</style>
