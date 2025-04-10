import { API_ROUTES, http } from '@/api';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
	const bookmarks = ref<Bookmark[]>([]);

	async function fetchBookmarks(categoryId: number) {
		const { data } = await http.get<Bookmark[]>(API_ROUTES.bookmarks(categoryId));
		bookmarks.value = data
	}

	return { bookmarks, fetchBookmarks }
});