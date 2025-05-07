import "styles/main.scss";

import { createPinia } from "pinia";
import { createApp } from "vue";

import Aura from "@primeuix/themes/aura";
import PrimeVue from "primevue/config";

import App from "./App.vue";

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.use(pinia);

app.mount("#app");
