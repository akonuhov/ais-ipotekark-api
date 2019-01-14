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
    path: '/users',
    component: () => import('@/pages/user/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/credit-objects',
    component: () => import('@/pages/credit-object/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/borrowers',
    component: () => import('@/pages/borrower/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/social-payments',
    component: () => import('@/pages/social-payment/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/providers',
    component: () => import('@/pages/provider/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/evaluators',
    component: () => import('@/pages/evaluator/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/documents',
    component: () => import('@/pages/document/Index'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/templates',
    component: () => import('@/pages/document/Template'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/history-operations',
    component: () => import('@/pages/history/Operation'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/history-access',
    component: () => import('@/pages/history/Access'),
    meta: {
      authenticated: true
    }
  }, {
    path: '/chat',
    component: () => import('@/pages/chat/Index'),
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
    } else {
      document.body.classList.add('app-loading')
      setTimeout(() => next(), 10)
    }
  } else {
    document.body.classList.add('app-loading')
    setTimeout(() => next(), 10)
  }
})

router.afterEach(() => {
  const splashScreen = document.querySelector('.app-splash-screen')
  if (splashScreen) {
    splashScreen.style.opacity = 0
    setTimeout(() => splashScreen && splashScreen.parentNode.removeChild(splashScreen), 300)
  }
  if (window.layoutHelpers && window.layoutHelpers.isSmallScreen() && !window.layoutHelpers.isCollapsed()) {
    setTimeout(() => window.layoutHelpers.setCollapsed(true, true), 10)
  }
  globals().scrollTop(0, 0)
})

export default router
