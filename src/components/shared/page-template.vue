<template>
  <main class="page container">
    <div class="page__header">
      <div class="page__title">
        {{ pageTitle }}
      </div>

      <div v-if="$slots['page-actions']" class="page__actions">
        <slot name="page-actions" />
      </div>
    </div>

    <div class="page__content" :class="pageContentClasses">
      <slot v-if="isContentLoading && $slots['page-content-loading']" name="page-content-loading" />
      <slot v-else-if="isContentEmpty && $slots['page-content-empty']" name="page-content-empty" />
      <slot v-else />
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "page-template",
});

const props = defineProps<{
  pageTitle: string;
  isContentLoading?: boolean;
  isContentEmpty?: boolean;
}>();

const pageContentClasses = computed(() => ({
  "page__content--loading": props.isContentLoading,
  "page__content--empty": props.isContentEmpty,
}));
</script>

<style lang="scss">
.page {
  display: flex;
  flex-direction: column;
  gap: 30px;

  &__header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;

    @media screen and (min-width: 568px) {
      font-size: 28px;
      line-height: 36px;
    }
  }

  &__content {
    flex: 1;

    &--empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
