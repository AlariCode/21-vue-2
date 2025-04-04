<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted } from 'vue';

const store = useCategoryStore();

onMounted(() => {
  store.fetchCategories();
});
</script>

<template>
  <ul class="category-list">
    <li class="list-item" v-for="item in store.categories" :key="item.id">
      <a :href="`/${item.alias}`">{{ item.name }}</a>
    </li>
  </ul>
</template>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 34px;
  margin: 0;
  padding: 0;
}
.list-item {
  list-style: none;
}
.list-item a {
  text-decoration: none;
  font-size: 14px;
  transition: all 0.5s;
  color: var(--color-fg);
}

.list-item a:hover {
  font-size: 24px;
  font-weight: 700;
}
</style>
