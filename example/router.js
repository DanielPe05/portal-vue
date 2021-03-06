import Vue from 'vue'
import VueRouter from 'vue-router'

import ToggleExample from './components/toggle/toggle-example.vue'
import TargetSwitch from './components/target-switch/target-switch.vue'
import SourceSwitch from './components/source-switch/source-switch.vue'
import Disabled from './components/disabled'
import CompAsRoot from './components/comp-as-root/comp-as-root.vue'
import MountToExternal from './components/mount-to/mount-to-external.vue'
import EmptyPortal from './components/empty-portal/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/toggle',
  },
  {
    path: '/toggle',
    component: ToggleExample,
  },
  {
    path: '/target-switch',
    component: TargetSwitch,
  },
  {
    path: '/source-switch',
    component: SourceSwitch,
  },
  {
    path: '/disabled',
    component: Disabled,
  },
  {
    path: '/component-as-root-element',
    component: CompAsRoot,
  },
  {
    path: '/empty',
    component: EmptyPortal,
  },
  {
    path: '/Mount-to-external-element',
    component: MountToExternal,
  },
]

const router = new VueRouter({
  routes,
})

export { routes, router as default }
