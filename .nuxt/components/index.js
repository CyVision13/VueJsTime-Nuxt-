export { default as BindingChild } from '../../components/BindingChild.vue'
export { default as EventsChild } from '../../components/EventsChild.vue'
export { default as EventsChildNested } from '../../components/EventsChildNested.vue'
export { default as HomeActionButtons } from '../../components/HomeActionButtons.vue'
export { default as HomeCounter } from '../../components/HomeCounter.vue'
export { default as HomeHeader } from '../../components/HomeHeader.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as ProvideChild } from '../../components/ProvideChild.vue'
export { default as ProvideChildNested } from '../../components/ProvideChildNested.vue'
export { default as RefParentChild } from '../../components/RefParentChild.vue'
export { default as SlotChildComponent } from '../../components/SlotChildComponent.vue'

export const LazyBindingChild = import('../../components/BindingChild.vue' /* webpackChunkName: "components/BindingChild" */).then(c => c.default || c)
export const LazyEventsChild = import('../../components/EventsChild.vue' /* webpackChunkName: "components/EventsChild" */).then(c => c.default || c)
export const LazyEventsChildNested = import('../../components/EventsChildNested.vue' /* webpackChunkName: "components/EventsChildNested" */).then(c => c.default || c)
export const LazyHomeActionButtons = import('../../components/HomeActionButtons.vue' /* webpackChunkName: "components/HomeActionButtons" */).then(c => c.default || c)
export const LazyHomeCounter = import('../../components/HomeCounter.vue' /* webpackChunkName: "components/HomeCounter" */).then(c => c.default || c)
export const LazyHomeHeader = import('../../components/HomeHeader.vue' /* webpackChunkName: "components/HomeHeader" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyProvideChild = import('../../components/ProvideChild.vue' /* webpackChunkName: "components/ProvideChild" */).then(c => c.default || c)
export const LazyProvideChildNested = import('../../components/ProvideChildNested.vue' /* webpackChunkName: "components/ProvideChildNested" */).then(c => c.default || c)
export const LazyRefParentChild = import('../../components/RefParentChild.vue' /* webpackChunkName: "components/RefParentChild" */).then(c => c.default || c)
export const LazySlotChildComponent = import('../../components/SlotChildComponent.vue' /* webpackChunkName: "components/SlotChildComponent" */).then(c => c.default || c)
