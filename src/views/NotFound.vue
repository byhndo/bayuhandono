<template>
  <div class="notfound-wrapper">
    <div class="notfound-content">    
      <p>Page not found</p>  
      <p>redirecting to bio..</p>  
  </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
let timeoutId

onMounted(() => {
  timeoutId = setTimeout(() => {
    router.replace('/bio') 
  }, 5000)
})

onBeforeUnmount(() => {
  clearTimeout(timeoutId)
})
</script>

<style scoped>
.notfound-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;          
}
</style>
