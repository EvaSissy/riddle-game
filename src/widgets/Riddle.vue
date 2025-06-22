<script setup lang="ts">
import { getRiddleContext } from '../entities/riddle/context.ts'

const { phrase } = getRiddleContext()
</script>

<template>
  <div class="riddle-container">
    {{phrase}}
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
</style>