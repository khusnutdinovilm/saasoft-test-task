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
        @save-record="rec => saveRecord(record.id, rec)"
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
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";

import RecordItem from "modules/record/components/record-item.vue";
import useNewRecordForm from "modules/record/composable/use-new-record-form";
import useRecordStore from "modules/record/store/record-store";

import EmptyContent from "shared/empty-content.vue";
import PageTemplate from "shared/page-template.vue";

import AppHeader from "common/app-header.vue";
import AppLoader from "common/page-loader.vue";

import type { IRecord } from "modules/record/types/record";

const recordStore = useRecordStore();

const isContentLoading = ref(true);
const isContentEmpty = computed(() => !recordStore.recordList.length && !newRecord.value);

const { newRecord, createNewRecord, saveNewRecord, resetNewRecord } = useNewRecordForm();

const deleteRecord = (recordId: IRecord["id"]) => {
  recordStore.deleteRecord(recordId);
};

type RecordForm = Omit<IRecord, "id">;
const saveRecord = (recordId: IRecord["id"], rec: RecordForm) => {
  recordStore.updateRecord(recordId, rec);
};

onMounted(async () => {
  try {
    await recordStore.getRecords();
  } catch (error) {
    console.log(error);
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
