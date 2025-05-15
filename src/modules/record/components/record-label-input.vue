<template>
  <base-input-text v-model="recordLableStr" label="Метка" @on-blur="updateModel" />
</template>

<script setup lang="ts">
import { ref } from "vue";

import BaseInputText from "ui/base-input-text";


import type { RecordLabelType } from "modules/record/types/record";

defineOptions({
  name: "record-label-input",
});

const emit = defineEmits<{
  (e: "on-blur"): void;
}>();

const model = defineModel<RecordLabelType[]>({ required: true });

const recordLableStr = ref<string>(model.value.map(labelType => labelType.text).join("; "));
const updateModel = () => {
  model.value = recordLableStr.value.split(";").map(text => ({ text: text.trim() }));
  emit("on-blur");
};
</script>
