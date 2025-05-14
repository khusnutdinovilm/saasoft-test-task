import { ref } from "vue";

import { type IRecord, type RecordForm, type RecordFormErrors } from "modules/record/types/record";

export default function useRecordForm(recordForm: IRecord | Omit<IRecord, "id">) {
  const form = ref<RecordForm>({
    label: recordForm.label,
    type: recordForm.type,
    login: recordForm.login,
    password: recordForm.password,
  });

  const formErrors = ref<RecordFormErrors>({
    login: false,
    password: false,
  });

  const validateRequiredFields = () => {
    formErrors.value.login = !form.value.login.length;
    formErrors.value.password = form.value.password === null ? false : !form.value.password?.length;
  };

  const isFormValid = (): boolean => {
    return !formErrors.value.login && !formErrors.value.password;
  };

  const submitForm = (callback: (form: RecordForm) => void) => {
    return callback(form.value);
  };

  return {
    form,
    formErrors,

    validateRequiredFields,
    isFormValid,
    submitForm,
  };
}
