import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Particles from './particles.js'; 

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function contentShow() {
document.documentElement.style.overflow = 'auto';
document.documentElement.style.height = 'auto';
document.body.style.overflow = 'auto';
document.body.style.height = 'auto';
	
const easing = "power3.out";
const dur = 1;
const togglePlayReset = "play none none reset";
const delaytl = .5;
	
const title = document.querySelector("h1");
const feBlur = document.querySelector(`#noisetitle feGaussianBlur`);
const feDisplacementMap = document.querySelector(`#noisetitle feDisplacementMap`);

let primitiveValues = { stdDeviation: 0, scale: 0 };

const titletl = gsap.timeline({
    defaults: {
      duration: 2.3,
      ease: "quart.out"
    },

    onUpdate: () => {
      feBlur.setAttribute("stdDeviation", primitiveValues.stdDeviation);
      feDisplacementMap.setAttribute("scale", primitiveValues.scale);
    }
  })
	
.to(primitiveValues, { 
    startAt: { stdDeviation: 50, scale: 250 },  
    stdDeviation: 0,  
    scale: 0  
  }, 0)

.to(title, { 
    startAt: {
      autoAlpha:0,
      opacity: 0  
    },
      autoAlpha:1,
      opacity: 1
}, 0);    
	  
let subtitle = new SplitText(".sub-title", { type: "chars, words" });

gsap.set(subtitle.chars, {
  autoAlpha:0,
  opacity:0
});
gsap.to(subtitle.chars, {
    duration: 2,
    autoAlpha:1,
    opacity: 1,
    ease: "quart.out",
    stagger: { from: "random", each: 0.03}
  }, "<");
gsap.set(".sub-title", {
  autoAlpha:1,
  opacity:1
});

gsap.set('.indicator', {
 y:-100	
});
	
gsap.to('.indicator', {
 y:0,
 duration:dur,
 autoAlpha: 1,
 ease: easing,
 onComplete: () => {
 gsap.fromTo('.indicator', {
  autoAlpha: 1,
  y:0,
  ease: easing
 }, {
  autoAlpha: 0,
  y:-100,
  duration: dur,
  ease: easing,
  scrollTrigger: {
  scrub: 3,
  trigger: '.indicator',
  start: 'center 40%',
  end: 'center 70%'					
  }
 });
}
}, "+=2");

gsap.to('.header', {  
 onComplete: () => {
  gsap.to(".header", {  
   y: "5dvh",
   ease: easing,
   scrollTrigger: {
    scrub: 3.5,
    trigger: '.header',
    start: 'top top'
  }
  })
    }
});

	    
(function () {
  const arrOpts = [
    {
      color: "#068FFF",
      direction: "right",
      duration: 1000,
      easing: "power1.inOut"
    },
    {
      color: "#068FFF",
      direction: "left",
      duration: 1000,
      easing: "power1.inOut"
    }
  ];

  const items = document.querySelectorAll(".nav");

  items.forEach((el, pos) => {
    let bttn = el.querySelector(".particles-button");
    bttn.style.pointerEvents = "auto"; // aktifkan pointer events awalnya
    let particlesOpts = arrOpts[pos];
    const particles = new Particles(bttn, particlesOpts);

    // Fungsi untuk jalankan integrasi dan munculkan tombol setelah selesai
    function runIntegrate() {
      bttn.style.pointerEvents = "none"; // disable klik saat animasi
      gsap.to(bttn, {
        autoAlpha: 0,
        duration: 0.3,
        onComplete: () => {
          particles.integrate({
            duration: particlesOpts.duration,
            easing: particlesOpts.easing,
            onComplete: () => {
              gsap.to(bttn, {
                autoAlpha: 1,
                duration: 0.5,
                onComplete: () => {
                  bttn.style.pointerEvents = "auto"; // aktifkan klik lagi
                }
              });
            }
          });
        }
      });
    }

    // Event klik tombol
    bttn.addEventListener("click", () => {
      runIntegrate();
      particles.disintegrate({
        duration: particlesOpts.duration,
        easing: particlesOpts.easing
      });
    });
  });
})();

                    
			 
} /*contentShow
