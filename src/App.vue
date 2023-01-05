<script lang="ts">
import { defineComponent } from "vue";
import MessageComponent from "./components/MessageComponent.vue";
import TilesComponent from "./components/TilesComponent.vue";
import { useGameState } from "./composables/useGameState.js";
export default defineComponent({
  name: "App",
  components: {
    TilesComponent,
    MessageComponent,
  },
  setup() {
    return {
      ...useGameState(),
    };
  },
});
</script>

<template>
  <!-- <div id="#app"> -->
  <!-- <main> -->
    <main class="flex flex-col place-items-center">
      <message-component />
      <tiles-component />
      <button
        class="text-xl w-24 bg-green-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
        :disabled="isDisabledBtn"
        @click="startGame"
      >
        start
      </button>
    </main>
  <!-- </div> -->
</template>
