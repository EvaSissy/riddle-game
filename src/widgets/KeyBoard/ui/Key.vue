<script setup lang="ts">
defineProps<{
  char: string
  isCorrect: boolean
  isWrong: boolean
  disabled?: boolean
}>()
</script>

<template>
  <button
      class="keyboard-button"
      :class="{ correct: isCorrect, wrong: isWrong }"
      :disabled="isWrong || isCorrect || disabled"
  >
    {{ char }}
  </button>
</template>

<style scoped>
.keyboard-button:disabled {
  opacity: 0.9;
}

.keyboard-button {
  padding: 0.25rem;
  border-radius: 8px;
  border: 0.125rem solid wheat;
  width: 2rem;
  font-size: 1.5rem;
}

.keyboard-button:not(:disabled):hover {
  border: 0.125rem solid whitesmoke;
  color: whitesmoke;
  background: darkslategray;
}

.correct {
  background: darkgreen;
}

.wrong {
  background: darkred;
}
</style>