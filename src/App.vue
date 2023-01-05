<template>
  <main class="flex flex-col place-items-center">
    <message-component />
    <tiles-component />
    <button-component />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MessageComponent from "./components/MessageComponent.vue";
import TilesComponent from "./components/TilesComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";
import { useGameState } from "./composables/useGameState.js";
export default defineComponent({
  name: "App",
  components: {
    MessageComponent,
    TilesComponent,
    ButtonComponent,
  },
  setup() {
    return {
      ...useGameState(),
    };
  },
});
</script>

<style>
body {
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#app {
  margin: auto;
}
</style>
