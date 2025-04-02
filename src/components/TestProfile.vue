<script lang="ts" setup>
import { useProfileStore } from '@/stores/profile.store';

const store = useProfileStore();
</script>
<template>
  {{ store.profile?.name }}
</template>
