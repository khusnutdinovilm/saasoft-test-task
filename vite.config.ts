import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";


import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/saasoft-test-task/" : "/",

  server: {
    host: "0.0.0.0",
    port: 5173,
  },

  plugins: [vue(), vueDevTools()],

  resolve: {
    alias: {
      modules: fileURLToPath(new URL("./src/modules/", import.meta.url)),
      utils: fileURLToPath(new URL("./src/utils/", import.meta.url)),
      helpers: fileURLToPath(new URL("./src/helpers/", import.meta.url)),
      styles: fileURLToPath(new URL("./src/styles/", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets/", import.meta.url)),
      types: fileURLToPath(new URL("./src/types/", import.meta.url)),
      ui: fileURLToPath(new URL("./src/components/ui/", import.meta.url)),
      common: fileURLToPath(new URL("./src/components/common/", import.meta.url)),
      shared: fileURLToPath(new URL("./src/components/shared/", import.meta.url)),
    },
  },
});
