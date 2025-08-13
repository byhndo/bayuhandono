<template>
  <div class="not-found">
    <h1>404 - Halaman Tidak Ditemukan</h1>
    <p>URL yang kamu masukkan tidak tersedia.</p>
    <router-link to="/">Kembali ke Beranda</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 2rem;
}
</style>
