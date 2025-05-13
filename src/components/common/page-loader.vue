<template>
  <i class="pi pi-spin pi-spinner" :style="pageLoaderStyles"></i>
</template>

<script setup lang="ts">
import { computed } from "vue";

defineOptions({
  name: "page-loader",
});

const { size = "4rem" } = defineProps<{
  size?: string;
}>();

const pageLoaderStyles = computed(() => ({
  fontSize: size,
}));
</script>
