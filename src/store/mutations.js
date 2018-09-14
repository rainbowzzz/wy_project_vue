

import {
  RECEIVE_HEADER,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMNEWUSERLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_ARTICLE,
  RECEIVE_RECOMMEND,
  RECEIVE_CATEGORYLEFTLIST,
  RECEIVE_YXWEEK,
  RECEIVE_MINUTE
} from "./mutation-type";

export default {
  //头部导航
  [RECEIVE_HEADER](state,{headerList}){
    state.headerList=headerList
  },
  //轮播图
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList=focusList
  },
  //品牌制造商下的列表
    [RECEIVE_TAGLIST](state,{tagList}){
     state.tagList=tagList
    },
    [RECEIVE_NEWITEMNEWUSERLIST](state,{newItemNewUserList}){
    state.newItemNewUserList=newItemNewUserList
    },
  //新品首发下的横向滑动
    [RECEIVE_NEWITEMLIST](state,{newItemList}){
    state.newItemList=newItemList
    },
  //人气推荐下的横向滑动
   [RECEIVE_POPULARITEMLIST](state,{popularItemList}){
      state.popularItemList=popularItemList
    },

  //专题精选下的横向滑动
    [RECEIVE_TOPICLIST](state,{topicList}){
      state.topicList=topicList
    },

  //居家好物下面的列表
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList=cateList
  },
  //识物轮播
  [RECEIVE_BANNER](state,{banner}){
    state.banner=banner
  },
  //文章横向滑动
  [RECEIVE_ARTICLE](state,{article}){
    state.article=article
  },
    //识物更多精彩列表
  [RECEIVE_YXWEEK](state,{yxWeek}){
    state.yxWeek=yxWeek
  },

  //识物十点一刻
  [RECEIVE_MINUTE](state,{minute}){
    state.minute=minute
  },
  //分类左边列表
  [RECEIVE_CATEGORYLEFTLIST](state,{categoryLeftList}){
    state.categoryLeftList=categoryLeftList
  },

  //为你推荐
  [RECEIVE_RECOMMEND](state,{recommend}){
    state.recommend=recommend
  },
}
