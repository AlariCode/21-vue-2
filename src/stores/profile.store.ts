import type { Profile } from '@/interfaces/profile.interface';
import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useProfileStore = defineStore('profile', () => {
	const profile = ref<Profile>();

	watch(profile, () => {
		console.log(profile)
	})
	return { profile };
});