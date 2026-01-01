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

<style scoped>
.app-layout {
  height: 100vh; /* ganze Viewport-Höhe */
  display: grid;
  grid-template-rows: auto 1fr auto;
}

.app-main {
  overflow-y: auto; /* NUR hier scrollen */
  overflow-x: hidden;
}
</style>
