<script lang="ts" setup>
const data = defineModel<string>();
</script>

<template>
  <input class="input-string" v-model="data" />
</template>

<style scoped>
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  color: var(--color-fg);
  font-size: 24px;
  min-width: 274px;
}
.input-string::placeholder {
  color: var(--color-inactive);
}
</style>
