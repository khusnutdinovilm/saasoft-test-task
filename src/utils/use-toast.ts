import { useToast as usePrimevueToast } from "primevue/usetoast";

export default function useToast() {
  const toast = usePrimevueToast();

  const showSuccessMessage = (summary: string) => {
    toast.add({ severity: "success", summary, group: "br", life: 3000 });
  };

  const showErrorMessage = (detail: string) => {
    toast.add({ severity: "error", summary: "[ОШИБКА]", detail, group: "br", life: 3000 });
  };

  return {
    showSuccessMessage,
    showErrorMessage,
  };
}
