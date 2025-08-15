import { createRouter, createWebHistory } from 'vue-router'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/bio' },
  { path: '/bio', component: Bio, name: 'Bio' },
  { path: '/photos', component: Photos, name: 'Photos' },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
