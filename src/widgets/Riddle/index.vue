<script setup lang="ts">
import Char from './ui/Char.vue'
import { getRiddleContext } from '../../entities/riddle/context.ts'

const { words } = getRiddleContext()
</script>

<template>
  <div class="riddle-container">
    <div class="riddle-word" v-for="word in words">
      <Char v-for="char in word" v-bind:char />
    </div>
  </div>
</template>

<style scoped>
.riddle-container {
  display: flex;
  flex-wrap: wrap;
  column-gap: 1.5rem;
  row-gap: 1rem;
  justify-content: center;
  padding: 0 0.5rem;
}

.riddle-word {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
</style>