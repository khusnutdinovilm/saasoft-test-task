import { ref } from "vue";

import { DEFAULT_RECORD_TYPE } from "helpers/record-type";
import useRecordStore from "modules/record/store/record-store";
import { type IRecord } from "modules/record/types/record";

export default function useNewRecordForm() {
  const newRecord = ref<Omit<IRecord, "id"> | null>(null);

  const createNewRecord = () => {
    newRecord.value = {
      label: [{ text: "" }],
      type: DEFAULT_RECORD_TYPE,
      login: "",
      password: null,
    };
  };

  const recordStore = useRecordStore();

  const saveNewRecord = (newRecord: Omit<IRecord, "id">) => {
    recordStore.createNewRecord(newRecord);
    resetNewRecord();
  };

  const resetNewRecord = () => {
    newRecord.value = null;
  };

  return {
    newRecord,
    createNewRecord,
    saveNewRecord,
    resetNewRecord,
  };
}
