<template>
<div>
  <Header/>
  <div class="see">
    <div>
      <div class="see_container">
        <HeaderScroll/>
        <Scroll/>
        <Recommend/>
        <Recommend/>
       <!--十点一刻-->
        <header>十点一刻</header>
        <div class="time">
          <ul class="minute">
            <li class="time_row" v-for="(timeItem,index) in minute" :key="index">
              <div class="topic" >
                 <div class="now_topic">-今日话题-</div>
                 <div class="experience">{{timeItem.desc}}</div>
                 <div class="chat">{{timeItem.title}}</div>
                 <div class="icon">
                   <i class="iconfont icon-liuyan"></i>
                   <span>{{timeItem.id}}人参与话题</span>
                 </div>
             </div>
            </li>
          </ul>

        </div>


        <SeeLock/>
      </div>
    </div>
  </div>



</div>
</template>
<script>
  import BScroll from 'better-scroll';
  import Scroll from '../../components/SeeScroll/SeeScroll.vue'
  import Recommend from '../../components/RecommendList/RecommendList.vue'
  import HeaderScroll from '../../components/SeeHeaderScroll/SeeHeaderScroll.vue'
  import SeeLock from '../../components/SeeLock/SeeLock.vue'
  import Header from "../../components/CommonHeader/CommonHeader.vue"
  import {mapState} from 'vuex'
  export default {
    data() {
      return {}
    },
    components:{
      Scroll,
      Recommend,
      HeaderScroll,
      SeeLock,
      Header
    },
    mounted() {
      new BScroll('.see',{
        click:true,
        scrollY:true
      })
      new BScroll('.time',{
        click:true,
        scrollX:true,
        scrollY:false
      })
    this.$store.dispatch('getMinute');

    },
    computed:{
      ...mapState(['minute'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import "../../common/stylus/mixins.styl"


  .see
    background-color #fff
    width 100%
    height (1334/$rem)
    position relative
    top 0
    left 0
    overflow hidden


   .see_container
    width 100%
    position relative
    top (88/$rem)
    font-size (28/$rem)
    color #333
  header
    display flex
    font-size (36/$rem)
    justify-content center
    align-items center
  .time
    width 100%
    height (440/$rem)
    clearFix()
    .minute
      float left
      height (570/$rem)
      white-space nowrap
      .time_row
        width (800/$rem)
        margin-left (20/$rem)
        display inline-block
        background-color #fff
        height (570/$rem)
        margin-top (20/$rem)
        .topic
          width 100%
          height (411/$rem)
          border (8/$rem) solid #f4f4f4
          text-align center
          margin-top (20/$rem)
        .now_topic
          color #7f7f7f
          font-size (24/$rem)
          text-align center
          height (70/$rem)
          line-height (70/$rem)
        .experience
          margin-top (30/$rem)
          font-size (40/$rem)
          font-weight bold
        .chat
          margin-top (20/$rem)
          font-size (28/$rem)
        .icon
          display flex
          flex-direction row
          justify-content center
          color #7f7f7f
          margin-top (80/$rem)
          .iconfont
            font-size (32/$rem)






</style>
