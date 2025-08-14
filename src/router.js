import { createRouter, createWebHistory } from 'vue-router'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/', redirect: '/bio' },
  { name: "Bio", path: "/bio", component: Bio },
  { name: "Photos", path: "/photos", component: Photos },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
