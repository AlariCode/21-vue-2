<script setup lang="ts">
import type { Category } from '@/interfaces/category.inteface';
import ButtonIcon from './ButtonIcon.vue';
import IconEdit from '@/icons/IconEdit.vue';
import { ref } from 'vue';
import InputString from './InputString.vue';
import IconOk from '@/icons/IconOk.vue';
import IconTrash from '@/icons/IconTrash.vue';
import { useCategoryStore } from '@/stores/categories.store';
import { useRouter } from 'vue-router';

const { category } = defineProps<{ category: Category }>();
const isEdited = ref<boolean>();
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoryStore();
const router = useRouter();

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

function deleteCategory() {
  categoryStore.deleteCategory(category.id);
  router.push({ name: 'main' });
}
</script>

<template>
  <div class="category-header">
    <h1 v-if="!isEdited">{{ category.name }}</h1>
    <div v-if="isEdited" class="category-header__edit">
      <InputString v-model="newCategoryName" />
      <ButtonIcon @click="updateCategory">
        <IconOk />
      </ButtonIcon>
    </div>
    <div class="category-header__actions">
      <ButtonIcon v-if="!isEdited" @click="toggleEdit">
        <IconEdit />
      </ButtonIcon>
      <ButtonIcon @click="deleteCategory">
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
.category-header__actions,
.category-header__edit {
  display: flex;
  gap: 8px;
}
</style>
