<script setup lang="ts">
import type { Category } from '@/interfaces/category.inteface';
import { useCategoryStore } from '@/stores/categories.store';
import { ref, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

const route = useRoute();
const state = useCategoryStore();
const category = ref<Category>();

watch(
  () => state.categories,
  () => {
    category.value = state.getCategoryByAlias(route.params.alias);
  },
);

onBeforeRouteUpdate((to) => {
  category.value = state.getCategoryByAlias(to.params.alias);
});
</script>

<template>
  Category
  {{ category?.name }}
</template>
