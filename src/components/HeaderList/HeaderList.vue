<template>
  <div class="tuijian">
    <ul class="scrollX">
      <li v-for="(header,index1) in headerList" :key="index1"
          @click="getItem(index1)"
      >{{header.name}}
        <span class="line" :class="{active:index===index1}"></span>
      </li>

    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex'
  export default {
    data() {
      return {
        index:0
      }
    },
    mounted(){
      new BScroll('.tuijian',{
        click:true,
        scrollX:true
      })
      this.$store.dispatch('getHeaderList')
    },
    methods:{
      getItem(index1){
        this.index=index1
      },
      toList(index){

      }
    },
    computed:{
      ...mapState(['headerList']),
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .tuijian
    width 100%
    height 30px
    .scrollX
      clearFix()
      background-color #fff
      color #333
      font-size 16px
      padding-top 10px
      float left
      white-space nowrap
      >li
        display inline-block
        margin-right 14px
        margin-left 20px
        >.line
          display block
          width 100%
          height 3px
          margin-top 2px
          &.active
            background-color #ab2b2b;
      .swiper_li
        display block
        width 30px
        height 2px
        background-color coral
</style>
