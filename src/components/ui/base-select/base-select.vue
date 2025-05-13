<template>
  <float-label variant="on" class="base-select">
    <prime-select v-model="model" :options="options" :option-label="optionLabel" />

    <label v-if="label" :for="id">
      {{ label }}
    </label>
  </float-label>
</template>

<script setup lang="ts" generic="T">
import FloatLabel from "primevue/floatlabel";
import PrimeSelect from "primevue/select";

defineOptions({
  name: "base-select",
});

defineProps<{
  id: string;
  optionLabel: string;
  options: T[];
  label?: string;
}>();

const model = defineModel<T>({ required: true });
</script>

<style lang="scss">
.base-select {
  & .p-select {
    width: 100%;
  }
}
</style>
