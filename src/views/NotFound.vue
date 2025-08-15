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
  // Redirect ke /bio setelah 2,5 detik
  timeoutId = setTimeout(() => {
    router.replace('/bio')
  }, 2500)
})

onBeforeUnmount(() => {
  // Hapus timeout jika halaman unmount duluan
  clearTimeout(timeoutId)
})
</script>

<style>
.notfound-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #111;
  color: #fff;
  text-align: center;
  font-family: Arial, sans-serif;
}

.notfound-content h1 {
  font-size: 6rem;
  margin: 0;
}

.notfound-content p {
  margin: 0.5rem 0;
  font-size: 1.2rem;
  color: #ccc;
}
</style>
