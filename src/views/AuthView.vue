<script setup lang="ts">
import ButtonText from '@/components/ButtonText.vue';
import InputString from '@/components/InputString.vue';
import { useAuthStore } from '@/stores/auth.store';
import { ref } from 'vue';

const form = ref<{ email?: string; password?: string }>({});
const authStore = useAuthStore();

function onSubmit(event: Event) {
  event.preventDefault();
  if (!form.value.email || !form.value.password) {
    return;
  }
  authStore.login(form.value.email, form.value.password);
  form.value = {};
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <h1 class="auth__header">Bookmarkly</h1>
      <form class="auth__form" @submit="onSubmit">
        <InputString v-model="form.email" placeholder="Email" />
        <InputString v-model="form.password" placeholder="Пароль" type="password" />
        <ButtonText type="submit">Вход</ButtonText>
        {{ authStore.getToken }}
      </form>
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
