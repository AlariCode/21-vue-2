<script setup lang="ts">
import { onMounted } from 'vue';
import ProfileAvatar from './components/ProfileAvatar.vue';
import { useProfileStore } from './stores/profile.store';
import TestProfile from './components/TestProfile.vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
  <div class="app">
    <nav class="nav">
      <ProfileAvatar v-if="store.profile" :name="store.profile.name" />
    </nav>
    <main>
      Контент
      <TestProfile />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  min-height: calc(100vh - 140px);
  gap: 200px;
  max-width: 1450px;
  margin: 140px auto 0 auto;
}
.nav {
  min-width: 400px;
}
</style>
