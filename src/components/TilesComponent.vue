<template>
  <div
    class="m-5 grid grid-cols-2 gap-1 place-items-center"
    :class="{ 'pointer-events-none': isDisabledTileContainer }"
  >
    <div
      v-for="tile in tiles"
      class="form-3D w-44 h-44 m-1"
      :key="tile.id"
      :class="[tile.bgcolor, { activated: tile.isActivated }]"
      @click="humanPlays(tile)"
    />
  </div>
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
