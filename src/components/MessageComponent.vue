<script setup lang="ts">
import { useGameState } from "../composables/useGameState";
const { msg } = useGameState();
</script>
<template>
  <p class="text-3xl font-large">{{ msg }}</p>
</template>
