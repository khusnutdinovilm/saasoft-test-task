<template>
  <app-header />

  <page-template
    page-title="Учетные записи"
    :is-content-loading="isContentLoading"
    :is-content-empty="isContentEmpty"
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

    <template #default></template>
  </page-template>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import useRecordStore from "modules/record/store/record-store";

import EmptyContent from "shared/empty-content.vue";
import PageTemplate from "shared/page-template.vue";

import AppHeader from "common/app-header.vue";
import AppLoader from "common/page-loader.vue";

const recordStore = useRecordStore();

const isContentLoading = ref(false);
const isContentEmpty = computed(() => recordStore.records.length === 0);

const createNewRecord = () => {
  console.log("create-new-record");
};
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

.record-item {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  gap: 10px;

  &__field {
    flex: 1;
  }
}
</style>
