<template>
  <div>

     <div class="header">
       <div class="search">
        <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
        </span>
         <span class="search_shop">搜索商品，共13025件好物</span>
       </div>
     </div>
      <div class="sort_left_wrap">
        <div class="sort_list">
          <div class="sort_item" >
            <div class="item"  v-for="(item,index1) in categoryLeftList" :key="index1"
                 :class="{active:index === index1 }" @click="getIndex(index1)"
            >{{item.name}}</div>
          </div>
        </div>
      </div>
      <SortRightList :categoryLeftList="categoryLeftList" :index="index"/>

  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll';
  import SortRightList from '../../components/SortRightList/SortRightList.vue'

  export default {
    data() {
      return {
        index:2
      }
    },
    methods:{
      getIndex(index1){
        this.index=index1
        console.log(index1)

      }
    },
    mounted(){
     new BScroll('.sort_left_wrap',{
       click:true,
       scrollY:true
     })
      this.$store.dispatch('getCategoryLeftList')
    },
    computed:{
      ...mapState(['categoryLeftList'])
    },
    components:{
      SortRightList,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    bottom-border-1px(#e4e4e4)
    width 100%
    position fixed
    left 0
    top 0
    z-index 100
    font-size (32/$rem)
    display flex
    flex-direction row
    justify-content center
    align-items center
    background-color #fff
    .search
      width 80%
      display flex
      justify-content center
      background #eee
      height (60/$rem)
      margin (20/$rem) 0
      border-radius (10/$rem)
      .item_icon
        display inline-block
        margin-left (40/$rem)
      .iconfont
        font-size (40/$rem)
        display inline-block
        margin-top (10/$rem)
      .search_shop
        display inline-block
        margin-left (6/$rem)
        margin-top (14/$rem)
        color #666
  .sort_left_wrap
    border-right 1px solid #e4e4e4
    position fixed
    top (100/$rem)
    left 0
    height 85%
    overflow hidden
    width (162/$rem)
    .sort_list
      position relative
      overflow hidden
      width 100%

    .sort_item
      padding-bottom (20/$rem)
      width 91%
      justify-content space-between
      align-items center
      display flex
      flex-wrap wrap
      .item
        color #333
        display block
        border none
        text-align center
        font-size (28/$rem)
        line-height (110/$rem)
        text-overflow ellipsis
        white-space nowrap
        overflow hidden
        width 100%
        height (110/$rem)
        &.active
          border-left: (6/$rem) solid #ab2b2b;
          color #ab2b2b;
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          font-size (32/$rem)
</style>
