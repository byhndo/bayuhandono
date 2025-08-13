<script setup>
import { ref } from 'vue'

const props = defineProps({
  activeRoute: String,
  goToBio: Function,
  goToPhotos: Function
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

