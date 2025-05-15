import "primeicons/primeicons.css";
import "styles/main.scss";

import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import { createApp } from "vue";

import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";

import App from "./App.vue";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(ToastService);

app.mount("#app");
