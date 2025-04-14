<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import InputString from '@/components/InputString.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const email = ref<string>();

function redirectToMain() {
  router.push({
    name: 'main',
  });
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <h1 class="auth__header">Bookmarkly</h1>
      <InputString v-model="email" placeholder="Email" />
      <ButtonText @click="redirectToMain">Вход</ButtonText>
    </div>
  </div>
</template>

<style scoped>
.auth {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
.auth__header {
  font-size: 52px;
  font-weight: 700;
}
.auth__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 52px;
}
</style>
