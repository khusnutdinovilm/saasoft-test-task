<template>
  <float-label variant="on">
    <input-text :id="id" v-model="model" type="text" :invalid="invalid" :disabled="disabled" />
    <label v-if="label" :for="id">
      {{ label }}
    </label>
  </float-label>
</template>

<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";

defineOptions({
  name: "base-input-text",
});

defineProps<{
  id: string;
  label?: string;
  disabled?: boolean;
  invalid?: boolean;
}>();

const model = defineModel<string>({ required: true });
</script>
