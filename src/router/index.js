import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Classify from '@/components/Classify'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
