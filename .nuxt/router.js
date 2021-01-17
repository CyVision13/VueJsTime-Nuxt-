import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5aad169c = () => interopDefault(import('../pages/binding.vue' /* webpackChunkName: "pages/binding" */))
const _41dfc386 = () => interopDefault(import('../pages/directives.vue' /* webpackChunkName: "pages/directives" */))
const _dec09742 = () => interopDefault(import('../pages/error.vue' /* webpackChunkName: "pages/error" */))
const _60286352 = () => interopDefault(import('../pages/events.vue' /* webpackChunkName: "pages/events" */))
const _17f155bd = () => interopDefault(import('../pages/form.vue' /* webpackChunkName: "pages/form" */))
const _34e81bf5 = () => interopDefault(import('../pages/life.vue' /* webpackChunkName: "pages/life" */))
const _16813940 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _35785549 = () => interopDefault(import('../pages/methods.vue' /* webpackChunkName: "pages/methods" */))
const _16dcd9a9 = () => interopDefault(import('../pages/nuxt-fetch.vue' /* webpackChunkName: "pages/nuxt-fetch" */))
const _3c3fef5d = () => interopDefault(import('../pages/nuxt-life.vue' /* webpackChunkName: "pages/nuxt-life" */))
const _4d1fe433 = () => interopDefault(import('../pages/nuxt-middleware.vue' /* webpackChunkName: "pages/nuxt-middleware" */))
const _0d5f546c = () => interopDefault(import('../pages/plugin.vue' /* webpackChunkName: "pages/plugin" */))
const _1882da09 = () => interopDefault(import('../pages/product/index.vue' /* webpackChunkName: "pages/product/index" */))
const _329e6e90 = () => interopDefault(import('../pages/provide.vue' /* webpackChunkName: "pages/provide" */))
const _2a7b0b5d = () => interopDefault(import('../pages/ref-parent.vue' /* webpackChunkName: "pages/ref-parent" */))
const _4444eae2 = () => interopDefault(import('../pages/search-todo.vue' /* webpackChunkName: "pages/search-todo" */))
const _b20b4be8 = () => interopDefault(import('../pages/slots.vue' /* webpackChunkName: "pages/slots" */))
const _6c40eba6 = () => interopDefault(import('../pages/watch.vue' /* webpackChunkName: "pages/watch" */))
const _20216a84 = () => interopDefault(import('../pages/product/_slug/index.vue' /* webpackChunkName: "pages/product/_slug/index" */))
const _0f1751bd = () => interopDefault(import('../pages/validate/_id/index.vue' /* webpackChunkName: "pages/validate/_id/index" */))
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
    name: "binding___fa"
  }, {
    path: "/directives",
    component: _41dfc386,
    name: "directives___fa"
  }, {
    path: "/error",
    component: _dec09742,
    name: "error___fa"
  }, {
    path: "/events",
    component: _60286352,
    name: "events___fa"
  }, {
    path: "/form",
    component: _17f155bd,
    name: "form___fa"
  }, {
    path: "/life",
    component: _34e81bf5,
    name: "life___fa"
  }, {
    path: "/login",
    component: _16813940,
    name: "login___fa"
  }, {
    path: "/methods",
    component: _35785549,
    name: "methods___fa"
  }, {
    path: "/nuxt-fetch",
    component: _16dcd9a9,
    name: "nuxt-fetch___fa"
  }, {
    path: "/nuxt-life",
    component: _3c3fef5d,
    name: "nuxt-life___fa"
  }, {
    path: "/nuxt-middleware",
    component: _4d1fe433,
    name: "nuxt-middleware___fa"
  }, {
    path: "/plugin",
    component: _0d5f546c,
    name: "plugin___fa"
  }, {
    path: "/product",
    component: _1882da09,
    name: "product___fa"
  }, {
    path: "/provide",
    component: _329e6e90,
    name: "provide___fa"
  }, {
    path: "/ref-parent",
    component: _2a7b0b5d,
    name: "ref-parent___fa"
  }, {
    path: "/search-todo",
    component: _4444eae2,
    name: "search-todo___fa"
  }, {
    path: "/slots",
    component: _b20b4be8,
    name: "slots___fa"
  }, {
    path: "/watch",
    component: _6c40eba6,
    name: "watch___fa"
  }, {
    path: "/product/:slug",
    component: _20216a84,
    name: "product-slug___fa"
  }, {
    path: "/validate/:id",
    component: _0f1751bd,
    name: "validate-id___fa"
  }, {
    path: "/product/:slug/:id",
    component: _7b79a36f,
    name: "product-slug-id___fa"
  }, {
    path: "/search/*",
    component: _56ef8f9e,
    name: "search-all___fa"
  }, {
    path: "/",
    component: _4cd99629,
    name: "index___fa"
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
