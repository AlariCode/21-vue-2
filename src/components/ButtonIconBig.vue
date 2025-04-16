<script setup lang="ts"></script>

<template>
  <button class="button-icon-big">
    <slot />
  </button>
</template>

<style scoped>
.button-icon-big {
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  border: 3px solid var(--color-bg);
}
.button-icon:hover {
  background: var(--color-bg-hover);
}
</style>
