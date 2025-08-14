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

const showNav = inject('showNav')
const showHeader = inject('showHeader')
defineOptions({
  name: 'NotFound'
})

onMounted(() => {
  showNav.value = false
  showHeader.value = false
})

onBeforeUnmount(() => {
  showNav.value = true
  showHeader.value = true
})

function goHome() {
  router.push('/')
}
</script>

<style scoped>
	  html, body {
 background: var(--bgloaderscreen);
 font-family: var(--font2);
 height: 100dvh;
 overflow: hidden;
}

a {
 color: inherit;
}
	
a:hover, a:active{
 opacity:1!important;
}

.container{
 height:100%;
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top:5dvh;
 overflow: hidden;
}

.main{
 display:flex;
 justify-content:center;
 align-items:center;
 flex-direction: column;
} 
	
.box {
 font-size: 30vw;
 font-family: var(--font3);
 color: var(--textloadercolor);
 text-align: center;
 text-transform: uppercase;
 font-weight: 400;
 user-select: none;
 filter: url(#noise);
 opacity:0;
 visibility:hidden;
}
	
.theme-404 {
 --color-item-bg: transparent;
 --color-button-bg: var(--textloadercolor);
 --color-button-text: var(--bgloaderscreen);
 --button-padding: .88rem 3rem .8rem;
 --button-margin: 0;
 --radius-button: 40px;
 --border-button: 0;
 padding-bottom:14rem;
  }

#btn404{
 text-transform: none;
 font-family: var(--font2);
 font-size:10.5px;
 font-weight: var(--fwbtn);
 text-align: center;
}

@media only screen and (orientation: landscape) {
.container{
 margin-top:35dvh;	
}
.box {
 font-size: 20vw;
}
}
	
@media screen and (max-width: 760px) and (min-width: 600px) {
.container{
 margin-top:27dvh;	
}
.box {
 font-size: 10vw;
}
}	
</style>
