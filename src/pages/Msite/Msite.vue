<template>
  <div class="msite_container">
    <div class="header">
      <div class="wy_word">网易严选</div>
      <div class="search">
        <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="search_shop">搜索商品，共13025件好物</span>
      </div>

    </div>
    <div class="msite">
      <div class="container">
        <!--推荐滑动-->
        <headerList />
        <!--轮播图-->
        <headerScroll/>
        <!--制造商列表-->

        <!--新品首发-->
        <div class="shop_content">
          <div class="brand_title">
            品牌制造商直供
            <span class="item_icon">
            <i class="iconfont icon-rightarrow"></i>
          </span>
          </div>
          <div class="brank_list">
            <ul class="brank_list_content">
              <li class="manufacturer_list" v-for="(tag,index) in tags" :key="index">
                <div class="manufacturer_content">
                  <span class="manufacturer">{{tag.name}}</span>
                  <span class="money">{{tag.floorPrice}}元</span>
                  <span class="item_icon">
                <i class="iconfont icon-gongnengshangxin"></i>
              </span>
                </div>
                <img :src="tag.picUrl" alt="">



              </li>

            </ul>
            <div class="all_content">
              <a href="javascript:;" class="all_content_link">
                <span class="new">新品首发</span>
                <span class="see_all">查看全部 > </span>
              </a>
            </div>
          </div>

        </div>

        <!--横向滑动-->
        <Scroll :scroll="newItemList" type="1"/>

        <!--人气推荐-->
        <div class="shop_content">
          <div class="brand_title">
            品牌制造商直供
            <span class="item_icon">
            <i class="iconfont icon-rightarrow"></i>
          </span>
          </div>
          <div class="brank_list">
            <ul class="brank_list_content">
              <li class="manufacturer_list" v-for="(tag,index) in tagTwo" :key="index">
                <div class="manufacturer_content">
                  <span class="manufacturer">{{tag.name}}</span>
                  <span class="money">{{tag.floorPrice}}</span>
                  <span class="item_icon">
                <i class="iconfont icon-gongnengshangxin"></i>
              </span>
                </div>
                <img :src="tag.picUrl"  alt="">
              </li>

            </ul>
            <div class="all_content">
              <a href="javascript:;" class="all_content_link">
                <span class="new" style="font-size: 16px;display: inline-block;width: 100%">人气推荐，好物精选</span>
                <span class="see_all">查看全部 > </span>
              </a>
            </div>
          </div>

        </div>
        <!--横向滑动-->
        <Scroll  :scroll='popularItemList' type="2"/>
        <!--严选限时购-->
        <div class="time_to_buy">
          <div class="left_time">
            <div class="time_font">
              严 选 限 时 购
            </div>
            <div class="time_limit">
              <span class="hour time_common">00</span>
              <span class="colon">:</span>
              <span class="minute time_common">19</span>
              <span class="colon">:</span>
              <span class="sec time_common" >20</span>
            </div>
            <div class="next_time">下一场 14:00 开始</div>
          </div>
          <div class="right_time">
            <img src="./img/time.png" alt="">
            <div class="price">
              <div class="price_now">￥62</div>
              <div class="price_origin">￥69</div>
            </div>
          </div>

        </div>

        <!--福利社图片-->
        <div class="welfare">
          <img src="./img/1.jpg" alt="">
        </div>
        <!--专题精选-->
        <projectSelection/>
        <!--居家好物-->
        <goods/>







      </div>
    </div>
  </div>

</template>
<script>
  import BScroll from 'better-scroll';
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'


  import headerList from '../../components/HeaderList/HeaderList.vue'
  import headerScroll from '../../components/HeaderScroll/HeaderScroll.vue'
  import Scroll from '../../components/RowScroll/RowScroll.vue'
  import projectSelection from '../../components/ProjectSelection/ProjectSelection.vue'
  import goods from '../../components/Goods/Goods.vue'

  export default {
    data() {
      return {}
    },
    mounted(){
      this.$nextTick(()=>{
        new BScroll('.msite',{
          click:true,
          scrollY:true
        })
      })



      this.$store.dispatch('getTagList')
      this.$store.dispatch('getNewItemList')
      this.$store.dispatch('getPopularItemList')
      this.$store.dispatch('getTopicList')

    },
    components:{
      headerList,
      headerScroll,
      Scroll,
      projectSelection,
      goods
    },
    computed:{
      ...mapState(['tagList']),
      ...mapState(['newItemList','popularItemList',]),
      tags(){
        const tags=this.tagList.slice(0,4);
        return tags;
      },
      tagTwo(){
        const tagTwo=this.tagList.slice(5,9);
        return tagTwo
        }

    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

    .header
      position fixed
      left 0px
      top 0px
      z-index 100
      font-size 16px
      background-color #fff
      width 100%
      display flex
      flex-direction row
      justify-content space-around
      align-items center
      .wy_word
        font-size 16px
        text-align center
      .search
        display flex
        justify-content center
        background #eee
        width 70%
        height 30px
        margin-top 8px
        border-radius 2px
        .item_icon
          display inline-block
          margin-left 20px
          .iconfont
            font-size 20px
            display inline-block
            margin-top 5px
        .search_shop
          display inline-block
          margin-left 3px
          margin-top 7px
          color #666


    .msite
      position relative
      top 0px
      left 0px
      width 100%
      height 667px
      overflow hidden


      .container
          position relative
          left 0px
          top 42px
          font-size 16px

          .shop_content
            margin-top 10px
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



            .brank_list
              margin 5px 5px
              .brank_list_content
                display flex
                flex-direction row
                flex-wrap wrap
                justify-content space-around
                margin 5px 0px
                .manufacturer_list
                  width 47%
                  height 114px
                  margin-top 5px
                  background-color #eee
                  span
                    display block
                    margin-top 8px
                    margin-left 12px
                    font-size 14px
                    color #333
                    .item_icon
                      display inline-block
                      margin-left 20px
                    .iconfont
                      font-size 18px
                      color lightcoral

                img
                  width 100%
                  height 100%
                  margin-top -75px



            .all_content
              width 100%
              height 125px
              background-color lightblue
              text-align center
              color #8BA0B6
              opacity 0.7
              .all_content_link
                width 200px
                height 60px
                display inline-block
                font-size 20px
                margin-top 45px
                .new
                  display inline-block
                .see_all
                  display inline-block
                  width 100%
                  height 27px
                  font-size 14px
                  margin-top 10px
                  text-align center
                  line-height 27px
                  background-color #D8E5F1;



            .row_scroll
              width 100%
              height 230px

          .time_to_buy
            width 100%
            height 183px
            margin-top 28px
            .left_time
              float left
              margin-left 30px
              margin-top 20px
              .time_font
                font-size 18px
                color #333

              .time_limit
                font-size 14px
                >span
                  display inline-block
                .time_common
                  width 29px
                  height 27px
                  color #fff
                  margin-top 5px
                  text-align center
                  line-height 27px
                  border-radius 2px
                  background #444


              .next_time
                margin-top 15px
                font-size 12px
                color #333


            .right_time
              float right
              width 154px
              height 154px
              margin-top -14px
              position relative
              >img
                width 100%
                height 100%
              .price
                width 47px
                height 47px
                border-radius 100%
                position absolute
                bottom 15px
                right 15px
                color #fff
                font-size 12px
                background-color rgba(244,143,24,.95)
                .price_now
                  margin-left 8px
                  margin-top 10px
                .price_origin
                  margin-left 8px
                  margin-top 5px



          .welfare
            width 100%
            height 144px
            margin 5px 0
            img
              width 100%
              height 100%


</style>
