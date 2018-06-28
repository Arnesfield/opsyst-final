import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/components/HomeView'

import InfixView from '@/components/InfixView'
import TaskManagerView from '@/components/TaskManagerView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
      meta: {
        title: 'OPSYST Final Project'
      }
    },

    {
      path: '/infix',
      name: 'InfixView',
      component: InfixView,
      meta: {
        title: 'infix.io'
      }
    },
    {
      path: '/tasks',
      name: 'TaskManagerView',
      component: TaskManagerView,
      meta: {
        title: 'Tasks Manager'
      }
    }
  ]
})
