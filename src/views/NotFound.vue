<template>
  <div class="notfound-wrapper">
    <div class="notfound-content">
      <h1>404</h1>
      <p>Oops! Page not found.</p>
      <p>Redirecting to home...</p>
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
  }, 2500)
})

onBeforeUnmount(() => {
  clearTimeout(timeoutId)
})
</script>

<style>
.notfound-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
