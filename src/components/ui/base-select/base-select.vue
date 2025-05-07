<template>
  <float-label variant="on">
    <p-select
      v-model="selected"
      :options="options"
      :option-label="optionLabel"
      style="width: 100%"
    />

    <label v-if="label" :for="id">
      {{ label }}
    </label>
  </float-label>
</template>

<script setup lang="ts" generic="T">
import FloatLabel from "primevue/floatlabel";
import PSelect from "primevue/select";

defineOptions({
  name: "base-select",
});

defineProps<{
  id: string;
  label?: string;
  placeholder?: string;
  options: T[];
  optionLabel: string;
}>();

const selected = defineModel<T>();
</script>
