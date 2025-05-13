<template>
  <float-label variant="on" class="base-input-text">
    <input-text
      :id="id"
      v-model="model"
      type="text"
      :disabled="disabled"
      :invalid="invalid"
      :maxlength="maxLength"
      @blur="onBlur"
    />

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
  maxLength?: number;
}>();

const emits = defineEmits<{
  (e: "on-blur"): void;
}>();

const model = defineModel<string>({ required: true });

const onBlur = () => {
  emits("on-blur");
};
</script>

<style lang="scss">
.base-input-text {
  & .p-inputtext {
    width: 100%;
  }
}
</style>
