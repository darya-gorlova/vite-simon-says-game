<template>
  <div class="message-container">
    <div class="level">
      <div>level</div>
      <div class="text-7xl">{{ level }}</div>
      <div>level</div>
    </div>
    <div class="message">{{ msg }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameState } from "../composables/useGameState.js";
export default defineComponent({
  setup() {
    const { msg, level } = useGameState();
    return { msg, level };
  },
});
</script>

<style lang="postcss">
.message-container {
  @apply flex flex-col m-5 place-items-center;
}
.level {
  @apply grid grid-cols-3 gap-3 p-5 mb-20 text-2xl place-items-center ;
}
.message {
  @apply text-3xl;
}
</style>
