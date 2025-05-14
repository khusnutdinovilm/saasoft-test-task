<template>
  <base-field :label="label">
    <template #field="{ id }">
      <prime-select v-model="model" :options="options" :input-id="id" :option-label="optionLabel" />
    </template>
  </base-field>
</template>

<script setup lang="ts" generic="T">
import PrimeSelect from "primevue/select";

import BaseField from "ui/base-field";

defineOptions({
  name: "base-select",
});

defineProps<{
  optionLabel: string;
  options: T[];
  label?: string;
}>();

const model = defineModel<T>({ required: true });
</script>
