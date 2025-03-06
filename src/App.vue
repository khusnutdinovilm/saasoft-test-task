<template>
  <app-header />

  <main class="container"></main>
</template>

<script setup lang="ts">
import AppHeader from "common/app-header.vue";
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1;
}
</style>
