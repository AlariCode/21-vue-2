<script setup lang="ts">
import type { Category } from '@/interfaces/category.inteface';
import { useCategoryStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const state = useCategoryStore();
const category = ref<Category>();

watch(
  () => ({
    alias: route.params.alias,
    categories: state.categories,
  }),
  (data) => {
    category.value = state.getCategoryByAlias(data.alias);
  },
);
</script>

<template>
  Category
  {{ category?.name }}
</template>
