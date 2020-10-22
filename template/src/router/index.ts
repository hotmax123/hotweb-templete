import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import NProgress from 'nprogress' // 顶部进度条
import 'nprogress/nprogress.css' // 进度条样式
import Component from 'vue-class-component'

import ExampleRouter from './example/ExampleRouter'

NProgress.configure({ showSpinner: false }) // 禁用加载动画
Vue.use(VueRouter)

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate' // for vue-router 2.2+
])

const routes: Array<RouteConfig> = ExampleRouter

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: '/',
      meta: { requiresAuth: false },
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: { requiresAuth: false },
      component: () => import('@/pages/auth/Login.vue')
    },
    {
      path: '/mainFrame',
      name: 'mainFrame',
      meta: { requiresAuth: false },
      component: () => import('@/pages/auth/MainFrame.vue'),
      children: routes
    },
    {
      path: '/403',
      name: '403',
      meta: { requiresAuth: false },
      component: () => import('@/pages/403.vue')
    },
    {
      path: '/404',
      name: '404',
      meta: { requiresAuth: false },
      component: () => import('@/pages/404.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  return next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
