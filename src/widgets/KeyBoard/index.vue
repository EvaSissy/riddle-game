<script setup lang="ts">
import { chars } from '../../shared/config/key.ts'
import Key from './ui/Key.vue'
import { getRiddleContext } from '../../entities/riddle/context.ts'
import { guessChars } from '../../entities/api/guess-char.ts'

const { correct, wrong, phrase, is_win } = getRiddleContext()

const handleClick = async (key: string) => {
  const response = await guessChars(key)

  correct.value = response?.correct
  wrong.value = response?.wrong
  phrase.value = response?.phrase
  is_win.value = response?.is_win
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
        :disabled="is_win"
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