<script setup lang="ts">
const { option } = defineProps<{ option: string }>();

const SORT_OPTIONS = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' },
];

const emit = defineEmits<{
  (e: 'sort', option: string): void;
}>();
</script>

<template>
  <div class="sort">
    <button
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      class="sort-item"
      @click="() => emit('sort', item.option)"
      :class="option == item.option ? 'active' : ''"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped>
.sort {
  margin-top: 16px;
  display: flex;
  gap: 8px;
}
.sort-item {
  background: none;
  border: none;
  color: var(--color-inactive);
  font-size: 16px;
  cursor: pointer;
}
.sort-item.active {
  color: var(--color-fg);
  border-bottom: 2px solid var(--color-fg);
  font-weight: 700;
}
</style>
