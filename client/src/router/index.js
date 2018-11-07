import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import globals from '@/globals'

Vue.use(Router)
Vue.use(Meta)

const router = new Router({
  base: '/',
  mode: 'history',
  routes: [{
    path: '/login',
    component: () => import('@/pages/authentication/Login')
  }, {
    path: '/registration',
    component: () => import('@/pages/authentication/Registration')
  }, {
    path: '/profile',
    component: () => import('@/pages/account/Index')
  }, {
    path: '/',
    component: () => import('@/pages/main/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/tasks-list',
    component: () => import('@/pages/main/TaskList'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/credit-objects',
    component: () => import('@/pages/credit-object/Index.vue'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/borrowers',
    component: () => import('@/pages/borrower/Index.vue'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/social-payments',
    component: () => import('@/pages/social-payment/Index.vue'),
    meta: {
      authenticated: true
    }
  }]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authenticated)) {
    if (!localStorage.getItem('authenticated')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
      // document.body.classList.add('app-loading')
    } else {
      next()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  // document.body.classList.add('app-loading')
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }
  globals().scrollTop(0, 0)
})

export default router
