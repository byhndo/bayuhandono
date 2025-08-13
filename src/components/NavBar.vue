<script setup>
import { ref, onMounted, watch, computed} from 'vue';

const btnNav1 = ref(null);
const btnNav2 = ref(null);
const props = defineProps({
  activeRoute: String,
  goToBio: Function,
  goToPhotos: Function
});

const updateButtonColors = (path) => {
  if (!btnNav1.value || !btnNav2.value) return;

  let bgColor, textColor;

  if (path === '/bio') {
    bgColor = '#3C4048';   
    textColor = '#e6e7eb'; 
  } else if (path === '/photos') {
    bgColor = '#e6e7eb';   
    textColor = '#3C4048'; 
} 

  gsap.to([btnNav1.value, btnNav2.value], {
    backgroundColor: bgColor,
    color: textColor,
    duration: .8,
    delay: 1.03
  });
};

 watch(() => props.activeRoute, (newPath) => {
  updateButtonColors(newPath);
}, { immediate: true });

onMounted(() => {
  updateButtonColors(props.activeRoute);
});

</script>


<template>
  
<div class="wrapnav">
<div class="nav theme">
<button @click="goToBio" ref="btnNav1" class="particles-button btn-nav1">About</button> 
</div>
<div class="nav theme">
<button @click="goToPhotos" ref="btnNav2" class="particles-button btn-nav2">Photo</button> 
</div>
</div> 

</template>

