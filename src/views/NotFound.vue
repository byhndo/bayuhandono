<template>
  <div class="container">
    <div class="main theme-404">
      <svg class="hidden">
        <defs>
          <filter id="noise" x="0%" y="0%" width="100%" height="100%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 14 -1"
              result="goo"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.009 1"
              numOctaves="1"
              seed="1"
              result="noise"
            />
            <feDisplacementMap
              in="goo"
              in2="noise"
              scale="0"
              result="displacement"
            />
            <feComposite
              in="SourceGraphic"
              in2="displacement"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
      <div class="box">404</div>
      <button id="btn404" class="particles-button" @click="goHome">Home</button>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import Particles from '../utils/particles.js'
import gsap from 'gsap'

const router = useRouter()

// Ambil state global dari App.vue
const showNav = inject('showNav')
const showHeader = inject('showHeader')

onMounted(() => {
  // Sembunyikan nav & header
  showNav.value = false
  showHeader.value = false
})

onBeforeUnmount(() => {
  // Tampilkan lagi saat keluar halaman
  showNav.value = true
  showHeader.value = true
})

function goHome() {
  router.push('/')
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}
</style>
