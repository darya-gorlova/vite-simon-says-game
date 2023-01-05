<template>
  <button
    class="form-3D text-xl font-normal w-24 px-5 py-2 bg-green-500 disabled:opacity-70"
    :class="{ 'pointer-events-none': isDisabledBtn }"
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


