<template>
  <float-label variant="on">
    <p-password
      v-model="model"
      toggle-mask
      :feedback="false"
      :invalid="invalid"
      :disabled="disabled"
    />

    <label v-if="label" :for="id">
      {{ label }}
    </label>
  </float-label>
</template>

<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import PPassword from "primevue/password";

defineOptions({
  name: "base-input-password",
});

defineProps<{
  id: string;
  label?: string;
  disabled?: boolean;
  invalid?: boolean;
}>();

const model = defineModel<string>({ required: true });
</script>
