<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <div class="header__brand">
          <img src="/assets/img/logo-main.png" alt="logo-main" class="header__brand-logo" />

          <div class="header__brand-caption">Тестовое задание SaaSoft</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: "app-header",
});
</script>

<style lang="scss">
.header {
  position: sticky;
  top: 0;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);

  &__wrapper {
    padding-top: 10px;
    padding-bottom: 10px;

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  &__brand {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 768px) {
      flex-flow: row nowrap;
      align-items: center;
      gap: 16px;
    }

    &-logo {
      display: block;
      width: 65px;
      height: 40px;

      @media screen and (min-width: 768px) {
        width: 94px;
        height: 54px;
      }
    }

    &-caption {
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;

      @media screen and (min-width: 768px) {
        font-size: 22px;
        line-height: 28px;
      }
    }
  }

  &__temp-block {
    width: 50px;
    height: 20px;
    background-color: black;
  }
}
</style>
