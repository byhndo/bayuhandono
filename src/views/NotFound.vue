<template>
  <div class="notfound-wrapper">
    <div class="notfound-content">
      <h1 class="notfound">404</h1>
      <p>Page not found</p>
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
  height: 100vh;          
}

.notfound-content {
  font-family: sans-serif; 
  text-transform: uppercase;
  color: #000;           
}

h1.notfound {
  font-size: 10vw;         
  margin: 0;
  line-height: 1;
  color: #000;          
}

p {
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #000;
}
</style>
