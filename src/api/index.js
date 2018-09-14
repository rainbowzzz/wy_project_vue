

import ajax from './ajax'

//首页导航列表
export const reqHeaderList=()=>ajax('/headerList')
//首页轮播
export const reqFocusList=()=>ajax('/focusList')
//首页品牌制造列表
export const reqTagList=()=>ajax('/tagList')

export const reqNewItemNewUserList=()=>ajax('/newItemNewUserList')
//人气推荐下的横向滑动
export const reqPopularItemList=()=>ajax('/popularItemList')
//新品首发下的横向滑动
export const reqNewItemList=()=>ajax('/newItemList')
//专题精选横向滑动
export const reqTopicList=()=>ajax('/topicList')
//最终的居家系列列表
export const reqCateList=()=>ajax('/cateList')

//识物轮播
export const reqBanner=()=>ajax('/banner')

//文章横向滑动
export const reqArticle=()=>ajax('/article')



//识物更多精彩列表
export const reqYxWeek=()=>ajax('/yxWeek')

//十点一刻
export const reqMinute=()=>ajax('/minute')


//为你推荐列表
export const reqRecommend=()=>ajax('/recommend')



//分类左边列表
export const reqCategoryLeftList=()=>ajax('/categoryLeftList')




