<template>
  <base-field :label="label" class="base-input-password">
    <template #field="{ id }">
      <input-password
        v-model="model"
        :input-id="id"
        toggle-mask
        :feedback="false"
        :invalid="invalid"
        :disabled="disabled"
        @blur="onBlur"
      />
    </template>
  </base-field>
</template>

<script setup lang="ts">
import inputPassword from "primevue/password";

import BaseField from "ui/base-field";

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

const model = defineModel<string | null>({ required: true });

const onBlur = () => emits("on-blur");
</script>
