

import Mock from 'mockjs';
import data from './msite.json';
import seeData from './seeData.json'
import category from './sort_category.json'


Mock.mock('/headerList',{code:0,data:data.headerList})
Mock.mock('/focusList',{code:0,data:data.focusList})
Mock.mock('/tagList',{code:0,data:data.tagList})
Mock.mock('/newItemNewUserList',{code:0,data:data.newItemNewUserList})
Mock.mock('/newItemList',{code:0,data:data.newItemList})
Mock.mock('/popularItemList',{code:0,data:data.popularItemList})
Mock.mock('/topicList',{code:0,data:data.topicList})
Mock.mock('/cateList',{code:0,data:data.cateList})
Mock.mock('/banner',{code:0,data:seeData.banner})
Mock.mock('/article',{code:0,data:seeData.article})
Mock.mock('/recommend',{code:0,data:seeData.recommend})
Mock.mock('/recommendOne',{code:0,data:seeData.recommendOne})
Mock.mock('/recommendTwo',{code:0,data:seeData.recommendTwo})
Mock.mock('/yxWeek',{code:0,data:seeData.yxWeek})
Mock.mock('/minute',{code:0,data:seeData.minute})
Mock.mock('/categoryLeftList',{code:0,data:category.categoryLeftList})
