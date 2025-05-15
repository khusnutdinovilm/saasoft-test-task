import { defineStore } from "pinia";
import { computed, ref } from "vue";

import recordService from "modules/record/services/record-service";
import { type IRecord } from "modules/record/types/record";

const useRecordStore = defineStore("record-store", () => {
  const mapRecords = ref<Map<IRecord["id"], IRecord>>(new Map());
  const recordList = computed(() => Array.from(mapRecords.value.values()));

  const getRecords = async () => {
    const records = await recordService.getRecords();

    mapRecords.value = new Map(records.map(record => [record.id, record]));
  };

  const createNewRecord = async (payload: Omit<IRecord, "id">) => {
    const newRecord = await recordService.createRecord(payload);

    mapRecords.value.set(newRecord.id, newRecord);
  };

  const updateRecord = async (id: IRecord["id"], payload: Partial<IRecord>) => {
    const updatedRecord = await recordService.updateRecord(id, payload);

    mapRecords.value.set(updatedRecord.id, updatedRecord);
  };

  const deleteRecord = async (id: IRecord["id"]) => {
    await recordService.deleteRecord(id);

    mapRecords.value.delete(id);
  };

  return {
    mapRecords,
    recordList,
    getRecords,
    createNewRecord,
    deleteRecord,
    updateRecord,
  };
});

export default useRecordStore;
