<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params.alias);
</script>

<template>
  Category
  {{ $route.params.alias }}
</template>
