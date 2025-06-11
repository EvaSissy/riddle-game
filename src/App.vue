<script setup lang="ts">
import Riddle from './widgets/Riddle/index.vue'
import KeyBoard from './widgets/KeyBoard/index.vue'
import Clue from './widgets/Clue.vue'
import { provide } from 'vue'
import { RIDDLE_KEY, riddleContext } from './entities/riddle/context.ts'

provide(RIDDLE_KEY, riddleContext)

</script>

<template>
  <div class="words-container">
    <Clue />
    <Riddle />
    <KeyBoard />
  </div>
</template>

<style scoped>
.words-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1rem 0;
}
</style>
