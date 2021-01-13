import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5aad169c = () => interopDefault(import('../pages/binding.vue' /* webpackChunkName: "pages/binding" */))
const _41dfc386 = () => interopDefault(import('../pages/directives.vue' /* webpackChunkName: "pages/directives" */))
const _60286352 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _34e81bf5 = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _16813940 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _35785549 = () => interopDefault(import('../pages/methods.vue' /* webpackChunkName: "pages/methods" */))
const _16dcd9a9 = () => interopDefault(import('../pages/nuxt-fetch.vue' /* webpackChunkName: "pages/nuxt-fetch" */))
const _3c3fef5d = () => interopDefault(import('../pages/nuxt-life.vue' /* webpackChunkName: "pages/nuxt-life" */))
const _4d1fe433 = () => interopDefault(import('../pages/nuxt-middleware.vue' /* webpackChunkName: "pages/nuxt-middleware" */))
const _1882da09 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _329e6e90 = () => interopDefault(import('../pages/provide.vue' /* webpackChunkName: "pages/provide" */))
const _2a7b0b5d = () => interopDefault(import('../pages/ref-parent.vue' /* webpackChunkName: "pages/ref-parent" */))
const _4444eae2 = () => interopDefault(import('../pages/search-todo.vue' /* webpackChunkName: "pages/search-todo" */))
const _b20b4be8 = () => interopDefault(import('../pages/slots.vue' /* webpackChunkName: "pages/slots" */))
const _6c40eba6 = () => interopDefault(import('../pages/watch.vue' /* webpackChunkName: "pages/watch" */))
const _20216a84 = () => interopDefault(import('../pages/product/_slug/index.vue' /* webpackChunkName: "pages/product/_slug/index" */))
const _7b79a36f = () => interopDefault(import('../pages/product/_slug/_id/index.vue' /* webpackChunkName: "pages/product/_slug/_id/index" */))
const _56ef8f9e = () => interopDefault(import('../pages/search/_.vue' /* webpackChunkName: "pages/search/_" */))
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
    path: "/directives",
    component: _41dfc386,
    name: "directives"
  }, {
    path: "/events",
    component: _60286352,
    name: "events"
  }, {
    path: "/life",
    component: _34e81bf5,
    name: "life"
  }, {
    path: "/login",
    component: _16813940,
    name: "login"
  }, {
    path: "/methods",
    component: _35785549,
    name: "methods"
  }, {
    path: "/nuxt-fetch",
    component: _16dcd9a9,
    name: "nuxt-fetch"
  }, {
    path: "/nuxt-life",
    component: _3c3fef5d,
    name: "nuxt-life"
  }, {
    path: "/nuxt-middleware",
    component: _4d1fe433,
    name: "nuxt-middleware"
  }, {
    path: "/product",
    component: _1882da09,
    name: "product"
  }, {
    path: "/provide",
    component: _329e6e90,
    name: "provide"
  }, {
    path: "/ref-parent",
    component: _2a7b0b5d,
    name: "ref-parent"
  }, {
    path: "/search-todo",
    component: _4444eae2,
    name: "search-todo"
  }, {
    path: "/slots",
    component: _b20b4be8,
    name: "slots"
  }, {
    path: "/watch",
    component: _6c40eba6,
    name: "watch"
  }, {
    path: "/product/:slug",
    component: _20216a84,
    name: "product-slug"
  }, {
    path: "/product/:slug/:id",
    component: _7b79a36f,
    name: "product-slug-id"
  }, {
    path: "/search/*",
    component: _56ef8f9e,
    name: "search-all"
  }, {
    path: "/",
    component: _4cd99629,
    name: "index"
  }],

  parseQuery: function(query) {
            return require("qs").parse(query);
        },
  stringifyQuery: function(query) {
            const result = require("qs").stringify(query);
            return result ? "?" + result : "";
        },
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
