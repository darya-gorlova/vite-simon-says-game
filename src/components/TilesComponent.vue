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

<template>
  <div
    class="m-5 grid grid-cols-2 gap-1 justify-center items-center w-96"
    :class="{ 'pointer-events-none': isDisabledTileContainer }"
  >
    <div
      v-for="tile in tiles"
      class="tile w-44 h-44 mx-1 my-1 rounded-xl shadow-[4.0px_6.0px_6.0px_rgba(0,0,0,0.40)] hover:opacity-50"
      :key="tile.id"
      :class="[tile.bgcolor,{activated: tile.isActivated}]"
      @click="humanPlays(tile)"
    />
  </div>
</template>
