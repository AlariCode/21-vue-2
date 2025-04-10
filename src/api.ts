import axios from 'axios';

export const API_ROUTES = {
	profile: `profile`,
	categories: `categories`,
	bookmarks: (id: number) => `categories/${id}/bookmarks`
};

export const http = axios.create({
	baseURL: "http://localhost:3000/api/",
	timeout: 10000
});