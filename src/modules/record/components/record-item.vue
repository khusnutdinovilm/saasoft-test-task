<template>
  <div class="record">
    <div class="record__field">
      <record-label-input v-model="form.label" @on-blur="trySaveRecord" />
    </div>

    <div class="record__field">
      <base-select
        v-model="form.type"
        :options="RECORD_TYPES"
        option-label="title"
        label="Тип записи"
        @on-change="recordTypeChanged"
      />
    </div>

    <div class="record__field">
      <base-input-text
        v-model="form.login"
        :invalid="formErrors.login"
        :max-length="100"
        label="Логин*"
        @on-blur="trySaveRecord"
      />
    </div>

    <div v-if="form.password !== null" class="record__field">
      <base-input-password
        v-model="form.password"
        :invalid="formErrors.password"
        :max-length="100"
        label="Пароль*"
        @on-blur="trySaveRecord"
      />
    </div>

    <delete-btn @click.prevent="$emit('delete-record')" />
  </div>
</template>

<script setup lang="ts">
import { RECORD_TYPES } from "helpers/record-type";
import RecordLabelInput from "modules/record/components/record-label-input.vue";
import useRecordForm from "modules/record/composable/use-record-form";
import { type IRecord } from "modules/record/types/record";

import BaseInputPassword from "ui/base-input-password";
import BaseInputText from "ui/base-input-text";
import BaseSelect from "ui/base-select";

import DeleteBtn from "common/delete-btn.vue";

defineOptions({
  name: "record-item",
});

type RecordForm = Omit<IRecord, "id">;

const props = defineProps<{
  record: IRecord | RecordForm;
}>();

const emit = defineEmits<{
  (e: "save-record", form: RecordForm): void;
  (e: "delete-record"): void;
}>();

const { form, formErrors, validateRequiredFields, isFormValid } = useRecordForm(props.record);
const recordTypeChanged = () => {
  const isLdap = form.value.type.id === "ldap";
  form.value.password = isLdap ? null : "";

  trySaveRecord();
};

const trySaveRecord = () => {
  validateRequiredFields();

  if (isFormValid()) {
    emit("save-record", form.value);
  }
};
</script>

<style lang="scss">
.record {
  display: flex;
  align-items: center;
  gap: 10px;

  &__field {
    flex: 1 calc(25% - 10px);
  }
}
</style>
