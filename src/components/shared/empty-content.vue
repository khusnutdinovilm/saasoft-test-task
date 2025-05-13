<template>
  <div class="empty-content">
    <div class="empty-content__title">
      {{ emptyContentTitle }}
    </div>

    <div v-if="$slots['empty-content-description']" class="empty-content__description">
      <slot name="empty-content-description" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "empty-content",
});

defineProps<{
  emptyContentTitle: string;
}>();
</script>

<style lang="scss">
.empty-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;

    @media screen and (min-width: 568px) {
      font-size: 20px;
      line-height: 24px;
    }
  }
}
</style>
