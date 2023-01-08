<template>
  <div
    class="tile-container"
    :class="{ 'pointer-events-none': isDisabledTileContainer }"
  >
    <div
      v-for="tile in tiles"
      class="tile"
      :key="tile.id"
      :class="[tile.bgcolor, { activated: tile.isActivated }, {'cursor-pointer': !isDisabledTileContainer}]"
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

<style lang="postcss">
.tile-container {
  @apply grid grid-cols-2 gap-1 m-5 place-items-center;
}
.tile {
  @apply m-1 shadow-form-3D hover:shadow-form-3D-hover rounded-xl w-44 h-44;
}
.activated {
  @apply opacity-60 translate-y-1;
}
</style>
