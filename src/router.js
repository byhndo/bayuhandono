import { createRouter, createWebHistory } from 'vue-router'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue' 

const routes = [
  { path: '/', redirect: '/bio' },
  { path: '/bio', component: Bio },
  { path: '/photos', component: Photos },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
