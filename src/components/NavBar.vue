<script setup>
import { onMounted, ref } from 'vue'

const props = defineProps({
  goToBio: Function,
  goToPhotos: Function,
  btnNav1: Object,
  btnNav2: Object
})

const btn1 = ref(null)
const btn2 = ref(null)

onMounted(() => {
  props.btnNav1.value = btn1.value
  props.btnNav2.value = btn2.value
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

