import { createRouter, createWebHistory } from 'vue-router'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/bio', meta: { showNav: true, showHeader: true } },
  { path: '/bio', component: Bio, name: 'bio', meta: { showNav: true, showHeader: true } },
  { path: '/photos', component: Photos, name: 'photos', meta: { showNav: true, showHeader: true } },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'notfound', meta: { showNav: false, showHeader: false } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
