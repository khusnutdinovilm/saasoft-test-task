<template>
  <div class="delete-btn">
    <i class="pi pi-trash"></i>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: "delete-btn",
});
</script>

<style lang="scss">
.delete-btn {
  width: 40px;
  height: 40px;
  cursor: pointer;

  border: 1px solid white;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
