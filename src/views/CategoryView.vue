<script setup lang="ts">
import CategoryHeader from '@/components/CategoryHeader.vue';
import type { Category } from '@/interfaces/category.inteface';
import { useBookmarkStore } from '@/stores/bookmark.store';
import { useCategoryStore } from '@/stores/categories.store';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const categoryStore = useCategoryStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Category>();

onMounted(() => {
  category.value = categoryStore.getCategoryByAlias(route.params.alias);
  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id);
  }
});

watch(
  () => ({
    alias: route.params.alias,
    categories: categoryStore.categories,
  }),
  (data) => {
    category.value = categoryStore.getCategoryByAlias(data.alias);
    if (category.value) {
      bookmarkStore.fetchBookmarks(category.value.id);
    }
  },
);
</script>

<template>
  <CategoryHeader v-if="category" :category="category" />
</template>
