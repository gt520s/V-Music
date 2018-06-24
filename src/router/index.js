import Vue from 'vue'
import Router from 'vue-router'
import Rank from '@/components/Rank/rank'
import Singer from '@/components/Singer/singer'
import Search from '@/components/Search/search'
import Recommend from '@/components/Recommend/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
