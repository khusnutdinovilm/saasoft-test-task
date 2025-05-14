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
import generateUniqueId from "utils/generate-id";

defineOptions({
  name: "base-select",
});

defineProps<{
  optionLabel: string;
  options: T[];
  label?: string;
}>();

const id = generateUniqueId();

const model = defineModel<T>({ required: true });
</script>

<style lang="scss">
.base-select {
  & .p-select {
    width: 100%;
  }
}
</style>
