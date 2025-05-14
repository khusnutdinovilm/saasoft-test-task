<template>
  <float-label variant="on" class="base-input-password">
    <input-password
      :id="id"
      v-model="model"
      toggle-mask
      :feedback="false"
      :invalid="invalid"
      :disabled="disabled"
      @blur="onBlur"
    />

    <label v-if="label" :for="id">
      {{ label }}
    </label>
  </float-label>
</template>

<script setup lang="ts">
import FloatLabel from "primevue/floatlabel";
import inputPassword from "primevue/password";
import generateUniqueId from "utils/generate-id";

defineOptions({
  name: "base-input-password",
});

defineProps<{
  label?: string;
  disabled?: boolean;
  invalid?: boolean;
  maxLength?: number;
}>();

const emits = defineEmits<{
  (e: "on-blur"): void;
}>();

const id = generateUniqueId();

const model = defineModel<string | null>({ required: true });

const onBlur = () => emits("on-blur");
</script>

<style lang="scss">
.base-input-password {
  & .p-password,
  & input {
    width: 100%;
  }
}
</style>
