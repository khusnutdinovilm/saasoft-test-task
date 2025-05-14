import { defineStore } from "pinia";
import { ref, watch } from "vue";

import generateId from "utils/generate-id";

import type { IRecord } from "modules/record/types/record";

const saveRecordsInLocalStorage = (newRecords: IRecord[]) =>
  localStorage.setItem("records", JSON.stringify(newRecords));

const useRecordStore = defineStore("record-store", () => {
  const records_ls = localStorage.getItem("records");
  const records = ref<IRecord[]>(records_ls ? JSON.parse(records_ls) : []);
  watch(records, saveRecordsInLocalStorage, { deep: true, immediate: true });

  const createNewRecord = (payload: Omit<IRecord, "id">) => {
    const newRecord = {
      ...payload,
      id: generateId(),
    };

    records.value = [...records.value, newRecord];
  };

  const deleteRecord = (id: IRecord["id"]) => {
    const idx = records.value.findIndex(record => record.id === id);

    if (idx !== -1) {
      records.value.splice(idx, 1);
    }
  };

  const updateRecord = (id: IRecord["id"], payload: Partial<IRecord>) => {
    const idx = records.value.findIndex(record => record.id === id);

    if (idx !== -1) {
      records.value[idx] = {
        ...records.value[idx],
        ...payload,
      };
    }
  };

  return {
    records,
    createNewRecord,
    deleteRecord,
    updateRecord,
  };
});

export default useRecordStore;
