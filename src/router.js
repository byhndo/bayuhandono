import { createRouter, createWebHistory } from 'vue-router'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/bio', component: Bio, name: 'bio', alias: '/' },
  { path: '/photos', component: Photos, name: 'photos' },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'notfound' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
