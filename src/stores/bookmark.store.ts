import { API_ROUTES, client } from '@/api';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
	const bookmarks = ref<Bookmark[]>([]);

	async function fetchBookmarks(categoryId: number) {
		const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks(categoryId));
		bookmarks.value = data
	}

	return { bookmarks, fetchBookmarks }
});