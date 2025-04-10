<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push('/');
}
</script>

<template>
  <div class="not-found">
    <div class="not-found__form">
      <h1 class="not-found__header">404</h1>
      <ButtonText @click="redirectToMain">На главную</ButtonText>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.not-found__header {
  font-size: 128px;
  font-weight: 700;
}
.not-found__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
}
</style>
