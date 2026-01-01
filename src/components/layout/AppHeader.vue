<script setup></script>

<template>
  <header class="app-header">
    <div class="container">
      <h1>My App</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/overview">Overview</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  height: 64px;
  background: #0f172a;
  color: white;
  display: flex;
  align-items: center;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

a {
  color: white;
  margin-left: 16px;
  text-decoration: none;
}
</style>
