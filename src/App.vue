<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const pageTitle = computed(() => (route.meta.title as string | undefined) ?? 'App');
</script>

<template>
  <div class="app-shell">
    <header class="app-shell__header">
      <h1>{{ pageTitle }}</h1>
    </header>
    <main class="app-shell__main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem;
}
.app-shell__header h1 {
  margin: 0 0 1rem;
  font-size: 1.5rem;
}
.app-shell__main {
  min-height: 60vh;
}
</style>
