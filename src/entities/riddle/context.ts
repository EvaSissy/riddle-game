import { inject, ref } from 'vue'
import { getRiddle } from '../api/get-riddle.ts'

export interface Riddle {
  clue: string
  correct: string[]
  wrong: string[]
  words: string[][]
}

export const RIDDLE_KEY = 'riddle'

export const riddleContext = {
  clue: ref(''),
  correct: ref<string[]>([]),
  wrong: ref<string[]>([]),
  words: ref<string[][]>([])
}

const response = getRiddle()

riddleContext.clue.value = response.clue
riddleContext.words.value = response.words
riddleContext.correct.value = response.correct
riddleContext.wrong.value = response.wrong

export const getRiddleContext = () => {
  return inject(RIDDLE_KEY, riddleContext)
}