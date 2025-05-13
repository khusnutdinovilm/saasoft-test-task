<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <app-brand class="header__brand" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AppBrand from "common/app-brand.vue";

defineOptions({
  name: "app-header",
});
</script>

<style lang="scss">
.header {
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);

  &__wrapper {
    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
