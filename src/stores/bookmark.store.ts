import { API_ROUTES, client } from '@/api';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);
  const activeSort = ref<string>('date');

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get<Bookmark[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort,
      },
    });
    bookmarks.value = data;
  }

  async function deleteBookmark(id: number, categoryId: number) {
    await client().delete<Bookmark[]>(API_ROUTES.bookmarks.delete(id));
    fetchBookmarks(categoryId, activeSort.value);
  }

  async function addBookmark(url: string, category_id: number) {
    const { data } = await client().post<Bookmark>(API_ROUTES.bookmarks.create, {
      url,
      category_id,
    });
    bookmarks.value.push(data);
  }

  return { bookmarks, fetchBookmarks, deleteBookmark, activeSort, addBookmark };
});
