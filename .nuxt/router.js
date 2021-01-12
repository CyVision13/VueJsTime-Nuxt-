import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5aad169c = () => interopDefault(import('../pages/binding.vue' /* webpackChunkName: "pages/binding" */))
const _60286352 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _34e81bf5 = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _35785549 = () => interopDefault(import('../pages/methods.vue' /* webpackChunkName: "pages/methods" */))
const _329e6e90 = () => interopDefault(import('../pages/provide.vue' /* webpackChunkName: "pages/provide" */))
const _b20b4be8 = () => interopDefault(import('../pages/slots.vue' /* webpackChunkName: "pages/slots" */))
const _6c40eba6 = () => interopDefault(import('../pages/watch.vue' /* webpackChunkName: "pages/watch" */))
const _4cd99629 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/binding",
    component: _5aad169c,
    name: "binding"
  }, {
    path: "/events",
    component: _60286352,
    name: "events"
  }, {
    path: "/life",
    component: _34e81bf5,
    name: "life"
  }, {
    path: "/methods",
    component: _35785549,
    name: "methods"
  }, {
    path: "/provide",
    component: _329e6e90,
    name: "provide"
  }, {
    path: "/slots",
    component: _b20b4be8,
    name: "slots"
  }, {
    path: "/watch",
    component: _6c40eba6,
    name: "watch"
  }, {
    path: "/",
    component: _4cd99629,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
