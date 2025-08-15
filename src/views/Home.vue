<template>
  <Bio v-if="route.path === '/bio'" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import Bio from './Bio.vue'
</script>
