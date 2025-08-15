<template>
<div class="firstbox404">
<div class="secondbox404 theme-404">	
<svg style="position: absolute; width: 0; height: 0; overflow: hidden;">
<defs>
<filter id='noise404' x='0%' y='0%' width='100%' height='100%'>
<feGaussianBlur in="SourceGraphic" stdDeviation="0" result="blur"></feGaussianBlur>
<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 14 -1" result="goo"></feColorMatrix>
<feTurbulence type="fractalNoise" baseFrequency="0.009 1" numOctaves="1" seed="1" result="noise"></feTurbulence>
<feDisplacementMap in="goo" in2="noise" scale="0" result="displacement"></feDisplacementMap>
<feComposite in="SourceGraphic" in2="displacement" operator="atop"></feComposite>
</filter>
</defs>
</svg>				  
<div class="thirdbox404">404</div>	
<button id="btn404" class="particles-button" @click="goHome">Home</button>
</div>
</div>
</template>

<script>
import '@/assets/normalize.css'
import '@/assets/particles.css'
import '@/style.css'

import gsap from 'gsap'
import Particles from '@/utils/particles.js'

function goHome() {
  setTimeout(() => {
    window.location.replace('/bio')
  }, 2500)
}	

window.addEventListener("load", function () {
window.addEventListener("pageshow", ()=>{
	
const feBlur = document.querySelector(`#noise feGaussianBlur`);
const feDisplacementMap = document.querySelector(`#noise feDisplacementMap`);

let primitiveValues = { stdDeviation: 0, scale: 0 };
 
console.log(feBlur.value, feDisplacementMap.value) 

const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: 'expo.out',
},
  onUpdate: function () {
      feBlur.setAttribute('stdDeviation', primitiveValues.stdDeviation);
      feDisplacementMap.setAttribute('scale', primitiveValues.scale); 
    }
  });

tl.to(primitiveValues, { 
    startAt: { stdDeviation: 40, scale: 100 },  
    stdDeviation: 0,  
    scale: 0 
  }, 0)

.to(".thirdbox404", {
    startAt: {
      autoAlpha: 0,
      opacity: 0,  
      scale: .6     
    },
      autoAlpha:1,
      opacity: 1,  
      scale: 1 
  }, 0);
});

    (function () {
  const arrOpts = [    
    {
      direction: 'bottom',
      duration: 1000,
      easing: 'expo.in'
    }
  ];

  const items = document.querySelectorAll(".secondbox404");

  items.forEach((el, pos) => {
    let bttn = el.querySelector(".particles-button");

    if (!bttn) return; 

    let particlesOpts = arrOpts[pos];
    const particles = new Particles(bttn, particlesOpts);

    let tl = gsap.timeline()
window.addEventListener("pageshow", ()=> {	 
    tl.to(bttn, {
      autoAlpha: 0,
      onComplete: () => {
        particles.integrate({
          duration: 900,
          easing: "easeOutSine"
        });

        gsap.to(bttn, {
          duration: 1,	  
          onComplete: () => {
            bttn.style.opacity = "1";
            bttn.style.visibility = "visible";
	    bttn.style.pointerEvents = "none"; 
	    gsap.to(bttn, {
              onComplete: () => {
                bttn.style.pointerEvents = "none"; 
                gsap.to(bttn, {
                  onComplete: () => {
                  bttn.style.pointerEvents = "auto"; 
                }
              });
             }
            }); 
          }
        })
      }
    }, ">1.5")
});

      bttn.addEventListener("click", () => {
      particles.disintegrate();
    });
  });
})();


});   
</script>

<style>
html,
body {
  background: var(--bgloaderscreen);
  font-family: var(--font2);
  height: 100dvh;
  overflow: hidden;
}
</style>

<style scoped>
.firstbox404{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20dvh;
  overflow: hidden;
}

.secondbox404 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.thirdbox404 {
  font-size: 30vw;
  font-family: var(--font3);
  color: var(--textloadercolor);
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  user-select: none;
  filter: url(#noise404);
  opacity: 0;
  visibility: hidden;
}

.theme-404 {
  --color-item-bg: transparent;
  --color-button-bg: var(--textloadercolor);
  --color-button-text: var(--bgloaderscreen);
  --button-padding: 0.88rem 3rem 0.8rem;
  --button-margin: 0;
  --radius-button: 40px;
  --border-button: 0;
  padding-bottom: 14rem;
}

#btn404 {
  text-transform: none;
  font-family: var(--font2);
  font-size: 10.5px;
  font-weight: var(--fwbtn);
  text-align: center;
}

@media only screen and (orientation: landscape) {
  .firstbox404{
    margin-top: 35dvh;
  }
  .thirdbox404 {
    font-size: 20vw;
  }
}

@media screen and (max-width: 760px) and (min-width: 600px) {
  .firstbox404 {
    margin-top: 27dvh;
  }
  .thirdbox404{
    font-size: 10vw;
  }
}
</style>
