<template>
  <div class="brand">
    <img src="/assets/img/logo-main.png" alt="logo-main" class="brand__logo" />

    <div class="brand__caption">Тестовое задание фирмы SaaSoft</div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "app-brand",
});
</script>

<style lang="scss">
.brand {
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-flow: row nowrap;
    align-items: center;
    gap: 16px;
  }

  &__logo {
    display: block;
    width: 65px;
    height: 40px;

    @media screen and (min-width: 768px) {
      width: 94px;
      height: 54px;
    }
  }

  &__caption {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;

    @media screen and (min-width: 768px) {
      font-size: 22px;
      line-height: 28px;
    }
  }
}
</style>
