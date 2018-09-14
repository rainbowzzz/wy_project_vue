<template>
  <div class='see_lock'>
    <div class="lock_title">严选LOCK</div>
    <img src="./img/1.jpg" alt="">
    <div class="brief">
      <img src="./img/1.jpg" alt="" >
      <span>sss***u</span>
    </div>
    <div class="more_title">更多精彩</div>
    <div class="more_list" v-for="(lock,index) in yxWeek" :key="index">
      <div class="list_content">
        <img :src="lock.itemPicUrl" alt="">
        <div class="more_content">{{lock.title}}</div>
      </div>

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
      this.$store.dispatch('getYxWeek')
    },
    computed:{
      ...mapState(['yxWeek'])
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .see_lock
    width 100%

    font-size 14px
    border-top 4px solid #f4f4f4
    .lock_title
      width 100%
      height (119/$rem)
      display flex
      justify-content center
      align-items center
    >img
      width 100%
      height (750/$rem)
    .brief
      width 100%
      display flex
      flex-direction row
      height (141/$rem)
      margin-top 20px
      >img
        width (48/$rem)
        height (48/$rem)
        border-radius 100%
        vertical-align middle
      >span
        margin-top 2px
        margin-left 6px
        color #333
    .more_title
      width 100%
      height (139/$rem)
      background-color #f4f4f4
      text-align center
      line-height (139/$rem)
    .more_list
      width 100%
      box-sizing border-box
      border-bottom 15px solid #f4f4f4
      background-color #f4f4f4


      .list_content
        box-sizing border-box
        border 10px solid #fff
        background-color #fff
        margin-left 20px
        width 90%

        >img
          width 100%
          height (357/$rem)
        .more_content
          margin-top 10px
          width 100%
          line-height (89/$rem)
          height (89/$rem)
          font-size 12px
          color #333
</style>
