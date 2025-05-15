import { ref } from "vue";

import { type IRecord } from "modules/record/types/record";

import { DEFAULT_RECORD_TYPE } from "helpers/record-type";

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

  const resetNewRecord = () => {
    newRecord.value = null;
  };

  return {
    newRecord,
    createNewRecord,
    resetNewRecord,
  };
}
