<template>
<div class="container">
<div class="main theme-404">	
<svg class="hidden">		
<defs>
<filter id='noise' x='0%' y='0%' width='100%' height='100%'>
<feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur"></feGaussianBlur>
<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 14 -1" result="goo"></feColorMatrix>
<feTurbulence type="fractalNoise" baseFrequency="0.009 1" numOctaves="1" seed="1" result="noise"></feTurbulence>
<feDisplacementMap in="goo" in2="noise" scale="0" result="displacement"></feDisplacementMap>
<feComposite in="SourceGraphic" in2="displacement" operator="atop"></feComposite>
</filter>
</defs>
</svg>				  
<div class="box">404</div>	
<button id="btn404" class="particles-button">Home</button>
</div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import Particles from '../utils/particles.js'
import gsap  from 'gsap'

sessionStorage.redirect = location.pathname + location.search + location.hash;	

</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}
</style>
