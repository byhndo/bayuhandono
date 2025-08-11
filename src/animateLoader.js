import gsap from 'gsap';
import Particles from './particles.js';
import contentShow from './contentShow.js';
import $ from 'jquery';
import { isPreloading } from './preloaderState.js'; 


var width = 100,
  perfData = window.performance.timing,
  EstimatedTime = Math.abs(perfData.loadEventEnd - perfData.navigationStart),
  time = Math.floor((EstimatedTime / 1000) % 60) * 100;

$(".loadbar").animate({
  width: width + "%"
}, time);

var PercentageID = $("#precent"),
  start = 0,
  end = 100,
  duration = time;
animateValue(PercentageID, start, end, duration);

function animateValue(id, start, end, duration) {
  var range = end - start,
    current = start,
    increment = end > start ? 1 : -1,
    stepTime = Math.abs(Math.floor(duration / range)),
    obj = $(id);

  var timer = setInterval(function () {
    current += increment;
    $(obj).text(current);
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
} 

export default async function animateLoader() {
document.documentElement.style.overflow = 'hidden';
document.documentElement.style.height = '100%';
document.body.style.overflow = 'hidden';
document.body.style.height = '100%';
    
  await new Promise((resolve) => setTimeout(resolve, time));
	
  let percentBar = document.getElementById("precent");
  let loadingBar = document.getElementById("loader");

  const DOM = {};
  DOM.intro = document.querySelector(".preloader-wrap");
  DOM.shape = DOM.intro.querySelector("svg.shape");
  DOM.path = DOM.intro.querySelector("path.goey");	
  let tl = gsap.timeline({
    paused: true,
    onComplete: () => {  
    isPreloading.value = false;  
	contentShow();
	}
  });
		    	
  tl.to(".percentage", {
    autoAlpha: 0,
    duration: 1,
    delay: 1,
    eae: "none",
    onComplete: () => {
      percentBar.style.display = "none";
      tl.to("#loader", {
        autoAlpha: 0,
        duration: 1,
        ease: "quart.out",
        onComplete: () => {
          loadingBar.style.display = "none";
          tl.to(DOM.intro, {
            y: "-200vh",
            delay: 0.1,
            duration: 2,
            ease: "quad.inOut"
          });
          gsap.to(DOM.path, {
            duration: 1.2,
            ease: "linear",
            attr: { d: DOM.path.getAttribute("pathdata:id") }
          });
        }
      });
    }
  });  
	    	  	
  (function show() {
    const arrOpts = [{      
      direction: 'bottom',
      duration: 1000,
      easing: 'easeInExpo'
    }];

    const it = document.querySelectorAll(".wrapbtnloader");
    it.forEach((il, pos) => {
      let bttn = il.querySelector("button.particles-button");
      if (!bttn) return;
      let particlesOpts = arrOpts[pos];
      const particles = new Particles(bttn, particlesOpts);

      gsap.to(bttn, {
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
          });
        }
      });

      gsap.to(bttn, {
        onComplete: () => {
          bttn.addEventListener("click", function () {
            particles.disintegrate();
            tl.play();
          });
        }
      });
    });
  })();
            }
