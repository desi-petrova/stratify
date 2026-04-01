<template>
  <div class="app-layout">
    <Sidebar />

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue"
</script>

<style scoped>
.app-layout {
  display: flex;
  height: 100vh;
}

.content {
  flex: 1;
  padding: 20px;
}
</style>