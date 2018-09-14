

import {
  RECEIVE_HEADER,
  RECEIVE_FOCUSLIST,
  RECEIVE_TAGLIST,
  RECEIVE_NEWITEMNEWUSERLIST,
  RECEIVE_POPULARITEMLIST,
  RECEIVE_NEWITEMLIST,
  RECEIVE_TOPICLIST,
  RECEIVE_CATELIST,
  RECEIVE_BANNER,
  RECEIVE_ARTICLE,
  RECEIVE_RECOMMEND,
  RECEIVE_CATEGORYLEFTLIST,
  RECEIVE_YXWEEK,
  RECEIVE_MINUTE
} from "./mutation-type";


import {
  reqHeaderList,
  reqFocusList,
  reqTagList,
  reqNewItemNewUserList,
  reqNewItemList,
  reqPopularItemList,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqArticle,
  reqRecommend,
  reqCategoryLeftList,
  reqYxWeek,
  reqMinute

} from "../api";

export default {
  //获取首部导航列表
  async getHeaderList({commit}){
    let result=await reqHeaderList();
    if(result.code===0){
      const headerList=result.data
      commit(RECEIVE_HEADER,{headerList})

    }
  },
  //获取轮播图
  async getFocusList({commit},cb){
    let result=await reqFocusList();
    if(result.code===0){
      const focusList=result.data
      //console.log(focusList)
      commit(RECEIVE_FOCUSLIST,{focusList})
      cb &&cb()
    }

  },

  //获取品牌制造商下的列表
  async getTagList({commit}){
    let result=await reqTagList();
    if(result.code===0){
      const tagList=result.data
      //console.log(tagList)
      commit(RECEIVE_TAGLIST,{tagList})

    }

  },

  //获取新品首发下的横向滑动
  async getNewItemList({commit}){
    let result=await reqNewItemList();
    if(result.code===0){
      const newItemList=result.data
      console.log(newItemList)
      commit(RECEIVE_NEWITEMLIST,{newItemList})

    }

  },

  //获取人气推荐下的横向滑动
  async getPopularItemList({commit}){
    let result=await reqPopularItemList();
    if(result.code===0){
      const popularItemList=result.data
      //console.log(popularItemList)
      commit(RECEIVE_POPULARITEMLIST,{popularItemList})
    }
  },

  async getNewItemNewUserList({commit}){
    let result=await reqNewItemNewUserList();
    if(result.code===0){
      const newItemNewUserList=result.data
     //console.log(newItemNewUserList)
      commit(RECEIVE_NEWITEMNEWUSERLIST,{newItemNewUserList})
    }

  },

// //专题精选下的横向滑动
  async getTopicList({commit}){
    let result=await reqTopicList();
    if(result.code===0){
      const topicList=result.data
      //console.log(topicList)
      commit(RECEIVE_TOPICLIST,{topicList})
    }

  },

  //居家好物下面的列表
  async getCateList({commit}){
    let result=await reqCateList();
    if(result.code===0){
      const cateList=result.data
      //console.log(cateList)
      commit(RECEIVE_CATELIST,{cateList})
    }

  },

  //识物轮播
  async getBanner({commit}){
    let result=await reqBanner();
    if(result.code===0){
      const banner=result.data
      //console.log(banner)
      commit(RECEIVE_BANNER,{banner})
    }

  },

  //文章横向滑动
  async getArticle({commit}){
    let result=await reqArticle();
    if(result.code===0){
      const article=result.data
      //console.log(article)
      commit(RECEIVE_ARTICLE,{article})
    }

  },
  //识物更多精彩列表
  async getYxWeek({commit}){
    let result=await reqYxWeek();
    if(result.code===0){
      const yxWeek=result.data
      //console.log(yxWeek)
      commit(RECEIVE_YXWEEK,{yxWeek})
    }

  },

  //识物的十点一刻
  async getMinute({commit}){
    let result=await reqMinute();
    if(result.code===0){
      const minute=result.data
      commit(RECEIVE_MINUTE,{minute})
    }

  },

  //为你推荐列表
  async getRecommend({commit}){
    let result=await reqRecommend();
    if(result.code===0){
      const recommend=result.data
      //console.log(recommend)
      commit(RECEIVE_RECOMMEND,{recommend})
    }

  },

  //分类左边列表
  async getCategoryLeftList({commit}){
    let result=await reqCategoryLeftList();
    if(result.code===0){
      const categoryLeftList=result.data
      console.log(categoryLeftList)
      commit(RECEIVE_CATEGORYLEFTLIST,{categoryLeftList})
    }

  },
}
