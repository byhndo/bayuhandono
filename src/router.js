import { createRouter, createWebHistory } from 'vue-router'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/bio' },
  { path: '/bio', component: Bio, name: 'bio', meta: { hideNav: false } },
  { path: '/photos', component: Photos, name: 'photos', meta: { hideNav: false } },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound', meta: { hideNav: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const hideNav = to.meta.hideNav || false
  showNav.value = !hideNav
  showHeader.value = !hideNav

  if (firstVisit && to.path === '/photos') {
    firstVisit = false
    return next('/bio')
  }

  firstVisit = false
  next()
})

export default router
