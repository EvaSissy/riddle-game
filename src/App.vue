<script setup lang="ts">
import Riddle from './widgets/Riddle.vue'
import KeyBoard from './widgets/KeyBoard/index.vue'
import Clue from './widgets/Clue.vue'
import { provide } from 'vue'
import { getRiddleContext, RIDDLE_KEY, riddleContext } from './entities/riddle/context.ts'

provide(RIDDLE_KEY, riddleContext)

const { is_win } = getRiddleContext()

</script>

<template>
  <span v-if="is_win">
    Проверь телеграм!
  </span>
  <div v-else class="words-container">
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
