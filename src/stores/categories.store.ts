import { API_ROUTES } from '@/api';
import type { Category } from '@/interfaces/category.inteface';
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCategoryStore = defineStore('categories', () => {
	const categories = ref<Category[]>([]);

	async function fetchCategories() {
		const { data } = await axios.get<Category[]>(API_ROUTES.categories);
		categories.value = data
	}

	return { categories, fetchCategories }
});