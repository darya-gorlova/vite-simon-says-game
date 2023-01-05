<template>
  <p class="text-3xl font-large">{{ msg }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameState } from "../composables/useGameState.js";
export default defineComponent({
  setup() {
    const { msg } = useGameState();
    return { msg };
  },
});
</script>
