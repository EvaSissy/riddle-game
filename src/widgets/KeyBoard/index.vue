<script setup lang="ts">
import { chars } from '../../shared/config/key.ts'
import Key from './ui/Key.vue'
import { getRiddleContext } from '../../entities/riddle/context.ts'
import { guessChars } from '../../entities/api/guess-char.ts'

const { correct, wrong, words } = getRiddleContext()

const handleClick = (key: string) => {
  const response = guessChars(key)

  correct.value = correct.value.concat(response.correct)
  wrong.value = wrong.value.concat(response.wrong)
  words.value = response.words
}

</script>

<template>
  <div class="keyboard-container">
    <Key
        v-for="char in chars"
        @click="handleClick(char)"
        :char
        :isCorrect="correct.includes(char)"
        :isWrong="wrong.includes(char)"
    />
  </div>
</template>

<style scoped>
.keyboard-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}
</style>