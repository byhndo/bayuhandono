import { createRouter, createWebHistory } from 'vue-router'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', component: Bio, alias: '/bio', name: 'bio' }, // / dan /bio menampilkan Bio
  { path: '/photos', component: Photos, name: 'photos' },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' } // catch-all
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
