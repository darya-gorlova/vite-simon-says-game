<template>
  <button
    class="button"
    :disabled="isDisabledBtn"
    @click="startGame"
  >
    start
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameState } from "../composables/useGameState.js";
export default defineComponent({
  setup() {
    return {
      ...useGameState(),
    };
  },
});
</script>

<style lang="postcss">
.button {
  @apply w-24 px-5 py-2 text-xl font-normal bg-green-500 shadow-form-3D hover:shadow-form-3D-hover rounded-xl disabled:opacity-60 disabled:translate-y-1 disabled:pointer-events-none;
}
</style>

