export { default as HomeActionButtons } from '../../components/HomeActionButtons.vue'
export { default as HomeCounter } from '../../components/HomeCounter.vue'
export { default as HomeHeader } from '../../components/HomeHeader.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyHomeActionButtons = import('../../components/HomeActionButtons.vue' /* webpackChunkName: "components/HomeActionButtons" */).then(c => c.default || c)
export const LazyHomeCounter = import('../../components/HomeCounter.vue' /* webpackChunkName: "components/HomeCounter" */).then(c => c.default || c)
export const LazyHomeHeader = import('../../components/HomeHeader.vue' /* webpackChunkName: "components/HomeHeader" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
