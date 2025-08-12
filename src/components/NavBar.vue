<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  goToBio: Function,
  goToPhotos: Function,
  btnNav1: Object,
  btnNav2: Object
})

const btnNav1 = ref(null)
const btnNav2 = ref(null)

onMounted(() => {
  if (props.btnNav1) props.btnNav1.value = btnNav1.value
  if (props.btnNav2) props.btnNav2.value = btnNav2.value
})
</script>

<template>
  
<div class="wrapnav">
<div class="nav theme">
<button @click="goToBio" ref="btnNav1" class="particles-button">About</button> 
</div>
<div class="nav theme">
<button @click="goToPhotos" ref="btnNav2" class="particles-button">Photo</button> 
</div>
</div> 

</template>

