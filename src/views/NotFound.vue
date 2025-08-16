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
}
.notfound-content{
  font-family: var(--font3);
  text-transform: uppercase;
}
h1.notfound{
  text-transform: uppercase;
  font-size: 10vw;
}
</style>
