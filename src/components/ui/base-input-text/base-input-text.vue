<template>
  <base-field :label="label" class="base-input-text">
    <template #field="{ id }">
      <input-text
        :id="id"
        v-model="model"
        type="text"
        :disabled="disabled"
        :invalid="invalid"
        :maxlength="maxLength"
        @blur="onBlur"
      />
    </template>
  </base-field>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";

import BaseField from "ui/base-field";

defineOptions({
  name: "base-input-text",
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

const model = defineModel<string>({ required: true });

const onBlur = () => {
  emits("on-blur");
};
</script>
