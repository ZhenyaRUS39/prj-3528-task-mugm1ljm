<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
function increment(): void {
  count.value += 1;
}
</script>

<template>
  <section>
    <h2>Главная</h2>
    <p>
      Скелет проекта готов. Счётчик:
      <strong data-testid="counter">{{ count }}</strong>
    </p>
    <button type="button" @click="increment">+1</button>
    <p><RouterLink to="/about">Перейти к странице «О проекте»</RouterLink></p>
  </section>
</template>
