import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { animePath } from '../utils/animePath.js'

import Bio from './views/Bio.vue'
import Photos from './views/Photos.vue'
import NotFound from './views/NotFound.vue'

const routes = [
  { path: '/bio', component: Bio, alias: '/',  name: 'bio' },
  { path: '/photos', component: Photos, name: 'photos' },
  { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound'} 
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

const bg = ref('bio');

const triggerAnimation = () => {
  animePath(bg.value);      
};

router.afterEach((to, from) => {
  if (to.fullPath !== from.fullPath) {
    nextTick(() => {
      triggerAnimation()
    })
  }
})

export default router
