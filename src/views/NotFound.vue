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
import '@/assets/normalize.css';
import '@/assets/particles.css';
import '@/style.css';
	
import gsap from 'gsap'
import Particles from '../utils/particles.js'

window.addEventListener("load", function () {
window.addEventListener("pageshow", ()=>{
	
const feBlur = document.querySelector(`#noise feGaussianBlur`);
const feDisplacementMap = document.querySelector(`#noise feDisplacementMap`);

let primitiveValues = { stdDeviation: 0, scale: 0 };
 
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

.to(".box", {
    startAt: {
      autoAlpha: 0,
      opacity: 0,  
      scale: .6     
    },
      autoAlpha:1,
      opacity: 1,  
      scale: 1 
  }, 0)
});

(function () {
  const arrOpts = [    
    {
      direction: 'bottom',
      duration: 1000,
      easing: 'expo.in'
    }
  ];

  const items = document.querySelectorAll(".main");

  items.forEach((el, pos) => {
    let bttn = el.querySelector("button.particles-button");

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

const btn = document.getElementById("btn404");
	if (btn) {
  btn.addEventListener("click", () => {
    setTimeout(() => {
      location.replace('/');
    }, 2500);
  });
}
	
});

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
