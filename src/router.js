import { createRouter, createWebHistory } from 'vue-router'

import Home from './views/Home.vue'
import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/bio', component: Bio, name: 'bio' },
  { path: '/photos', component: Photos, name: 'photos' },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'notfound' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
