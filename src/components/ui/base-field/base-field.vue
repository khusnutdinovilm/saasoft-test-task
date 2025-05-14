<template>
  <float-label :variant="variant" class="base-field">
    <slot :id="id" name="field" />

    <label v-if="label" :for="id">
      {{ label }}
    </label>
  </float-label>
</template>

<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import generateUniqueId from "utils/generate-id";

defineOptions({
  name: "base-field",
});

const { variant = "on" } = defineProps<{
  label?: string;
  variant?: string;
}>();

const id = generateUniqueId();
</script>

<style lang="scss">
.base-field {
  & .p-select,
  & .p-inputtext {
    width: 100%;
  }
}
</style>
