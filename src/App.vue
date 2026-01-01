<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <AppHeader />

  <main class="app-main">
    <RouterView />
  </main>

  <AppFooter />
</template>

<style scoped></style>
