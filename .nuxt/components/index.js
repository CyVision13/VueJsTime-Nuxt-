export { default as HomeHeader } from '../../components/HomeHeader.vue'
export { default as Logo } from '../../components/Logo.vue'

export const LazyHomeHeader = import('../../components/HomeHeader.vue' /* webpackChunkName: "components/HomeHeader" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
