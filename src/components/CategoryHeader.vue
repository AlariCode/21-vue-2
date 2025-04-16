<script setup lang="ts">
import type { Category } from '@/interfaces/category.inteface';
import ButtonIcon from './ButtonIcon.vue';
import IconEdit from '@/icons/IconEdit.vue';
import { ref } from 'vue';
import InputString from './InputString.vue';
import IconOk from '@/icons/IconOk.vue';
import IconTrash from '@/icons/IconTrash.vue';
import { useCategoryStore } from '@/stores/categories.store';

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>();
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoryStore();

function toggleEdit() {
  isEdited.value = !isEdited.value;
}

function updateCategory() {
  if (!newCategoryName.value) {
    return;
  }
  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id);
  toggleEdit();
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited">{{ category.name }}</h1>
    <div v-if="isEdited">
      <InputString v-model="newCategoryName" />
      <ButtonIcon @click="updateCategory">
        <IconOk />
      </ButtonIcon>
    </div>
    <div>
      <ButtonIcon v-if="!isEdited" @click="toggleEdit">
        <IconEdit />
      </ButtonIcon>
      <ButtonIcon>
        <IconTrash />
      </ButtonIcon>
    </div>
  </div>
</template>

<style scoped>
.category-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
