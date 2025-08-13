<script setup>
import './assets/normalize.css';
import './assets/particles.css';
import './style.css';
	
import { ref, watch, onMounted, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText);

import preloadImages from './utils/preloadImages.js';
import { isPreloading } from './utils/preloaderState.js';
import animateLoader from './utils/animateLoader.js';
import setupReveal from './utils/setupReveal.js';
import animePath from './utils/animePath.js';
import Particles from './utils/particles.js';

import NavBar from './components/NavBar.vue'
import Header from './components/Header.vue'

const route = useRoute();
const router = useRouter();
const bg = ref('bio');
const firstLoad = ref(true);
	
const triggerAnimation = () => {
  animePath(bg.value);      
};


	
function smoothScrollToTop() {
  return new Promise((resolve) => {
    const distance = window.scrollY;
    if (distance === 0) return resolve();

    const duration = 500; // durasi scroll dalam ms
    let startTime = null;

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      window.scrollTo(0, distance * (1 - progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        resolve();
      }
    }

    requestAnimationFrame(step);
  });
}




	

const goToBio = () => {
      if (route.path === '/bio') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      
      } else {
        bg.value = 'bio';
        router.push('/bio');
      }
};

const goToPhotos = () => {
      if (route.path === '/photos') {        
		window.scrollTo({ top: 0, behavior: 'smooth' });
     
      } else {
        bg.value = 'photos';
        router.push('/photos');
      }
};

onMounted(async () => { 
 await router.isReady();
  if (route.path !== '/bio') {
    await router.replace('/bio');
    bg.value = 'bio';
}

const lenis = new Lenis({
  duration: 2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  smoothTouch: 1, 
  smoothWheel: true,
  touchMultiplier: 2.5,
  syncTouch: true,   
  autoResize: true
});

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => { lenis.raf(time * 1000);});
  gsap.ticker.lagSmoothing(0);
	
  await animateLoader();
  await nextTick();
  updateButtonColors(route.path);
  ScrollTrigger.refresh();
  firstLoad.value = false; 
});

const stopWatch = watch(isPreloading, async (loading) => {
  if (!loading && firstLoad.value) {
    firstLoad.value = false;
    await nextTick();
    stopWatch();
  }
});
	
watch(() => route.path, async (newPath) => {
    if (firstLoad.value) return;

if (firstLoad.value || route.name === 'NotFound') return;

			
    bg.value = (newPath === '/bio') ? 'bio' : 'photos';
    await nextTick();
    await smoothScrollToTop(); 
	triggerAnimation();
	updateButtonColors(newPath);

}
	
}, { immediate: true });

const beforeEnter = async (el) => {
  await nextTick();
  await preloadImages(el);
  ScrollTrigger.refresh();
}

const afterEnter = async (el) => {
  await nextTick();
  ScrollTrigger.refresh();
  setupReveal(el); 
};
   
const afterLeave = (el) => {
  if (el.ctx) {
    el.ctx.revert();
    delete el.ctx;	      
  }
};	
</script>

<template>
<div>
	
<div :class="['bg', bg]">
<svg id="bio" class="transition transition-bio" viewBox="0 0 100 100" preserveAspectRatio="none">
  <path id="bioPath" fill="var(--light)" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
</svg>
<svg id="photos" class="transition transition-photos" viewBox="0 0 100 100" preserveAspectRatio="none">
  <path id="photosPath" fill="var(--dark)" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
</svg>
		
<NavBar
  :active-route="route.path"
  :go-to-bio="goToBio"
  :go-to-photos="goToPhotos"
/>

<main>

<Header />

<router-view v-if="!isPreloading" v-slot="{ Component }">
  <transition appear name="slide-fade" mode="out-in" @before-enter="beforeEnter" @after-enter="afterEnter" @after-leave="afterLeave">
    <component :is="Component" :key="$route.fullPath" />
  </transition>
</router-view>	
	
</main>
</div> <!-- bg -->

</div>
</template>
