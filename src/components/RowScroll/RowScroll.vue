<template>
  <div :class="'row_scroll'+type" class="row_scroll">
    <ul class="row_list">
      <li class="list" v-for="(scoll,index) in scroll" :key="index">
        <img :src='scoll.listPicUrl' alt="">
        <p class="wy">{{scoll.name}}</p>
        <p class="brief">{{scoll.simpleDesc}}</p>
        <p class="money">￥{{scoll.retailPrice}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
  import BScroll from 'better-scroll';
  import {mapState} from 'vuex'
  export default {
    props:{
      scroll:Array,
      type:String
    },

    data() {
      return {}
    },
    mounted(){
      const type=this.type
      //console.log(type,scroll)
      this.$nextTick(()=>{
        new BScroll('.row_scroll'+type,{
          click:true,
          scrollX:true
        })
      })


    },
    methods:{

    },
    computed:{


    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .row_scroll
    width 100%
    .row_list
      float left
      white-space nowrap
      .list
        display inline-block
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
        margin-left 5px

        >img
          width 134px
          height 134px
          background-color aliceblue
          margin-left 5px
        >p
          width 134px
          margin-left 10px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          margin-top 2px
        .wy
          font-size 16px
          color #333
        .brief
          font-size 12px
          color #666
        .money
          color red
          font-size 14px


</style>
