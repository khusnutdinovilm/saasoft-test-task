<template>
  <app-header />

  <page-template
    page-title="Учетные записи"
    :is-content-loading="isContentLoading"
    :is-content-empty="isContentEmpty"
    class="record-list"
  >
    <template #page-content-loading>
      <app-loader />
    </template>

    <template #page-content-empty>
      <empty-content empty-content-title="Список учетных записей пуст">
        <template #empty-content-description>
          Нажмите на "+", чтобы добавить новую запись
        </template>
      </empty-content>
    </template>

    <template #page-actions>
      <div class="add-record-btn" @click.prevent="createNewRecord">
        <i class="pi pi-plus"></i>
      </div>
    </template>

    <template #default>
      <record-item
        v-for="record in recordStore.recordList"
        :key="record.id"
        :record="record"
        @save-record="rec => updateRecord(record.id, rec)"
        @delete-record="deleteRecord(record.id)"
      />

      <record-item
        v-if="newRecord"
        :record="newRecord"
        @save-record="saveNewRecord"
        @delete-record="resetNewRecord"
      />
    </template>
  </page-template>

  <primevue-toast position="bottom-right" group="br" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import PrimevueToast from "primevue/toast";
import useToast from "utils/use-toast";

import EmptyContent from "shared/empty-content.vue";
import PageTemplate from "shared/page-template.vue";

import AppHeader from "common/app-header.vue";
import AppLoader from "common/page-loader.vue";

import RecordItem from "modules/record/components/record-item.vue";
import useNewRecordForm from "modules/record/composable/use-new-record-form";
import useRecordStore from "modules/record/store/record-store";
import type { IRecord, RecordForm } from "modules/record/types/record";

const recordStore = useRecordStore();
const { showSuccessMessage, showErrorMessage } = useToast();

const isContentLoading = ref(true);
const isContentEmpty = computed(() => !recordStore.recordList.length && !newRecord.value);

const { newRecord, createNewRecord, resetNewRecord } = useNewRecordForm();
const saveNewRecord = async (rec: RecordForm) => {
  try {
    await recordStore.createNewRecord(rec);

    showSuccessMessage("Учетная запись создана");
  } catch (error) {
    console.error(error);
    showErrorMessage("Не удалось создать учетную запись");
  } finally {
    resetNewRecord();
  }
};

const deleteRecord = async (recordId: IRecord["id"]) => {
  try {
    await recordStore.deleteRecord(recordId);
    showSuccessMessage("Учетная запись удалена");
  } catch (error) {
    console.error(error);
    showErrorMessage("Не удалось удалить учетную запись");
  }
};

const updateRecord = async (recordId: IRecord["id"], payload: RecordForm) => {
  try {
    await recordStore.updateRecord(recordId, payload);

    showSuccessMessage("Учетная запись обновлена");
  } catch (error) {
    console.error(error);
    showErrorMessage("Не удалось обновить учетную запись");
  }
};

onMounted(async () => {
  try {
    await recordStore.getRecords();
  } catch (error) {
    console.log(error);
    showErrorMessage("Не удалось список учетных записей");
  } finally {
    isContentLoading.value = false;
  }
});
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-height: 100dvh;

  & main {
    flex: 1;
  }
}

.add-record-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;

  border: 1px solid white;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.record-list {
  & .page__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}
</style>
