
import Vue from "vue";
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue';
import See from '../pages/See/See.vue'
import Sort from '../pages/Sort/Sort.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Profile from '../pages/Profile/Profile.vue'
import LoginPhone from '../pages/LoginPhone/LoginPhone.vue'
import LoginEmail from '../pages/LoginEmail/LoginEmail.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path:'/msite',
      component:Msite,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/see',
      component:See,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/sort',
      component:Sort,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shopping',
      component:Shopping,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFooter:true
      },
    },
    {
      path:'/phone',
      component:LoginPhone
    },
    {
      path:'/email',
      component:LoginEmail
    },
  ]
})




