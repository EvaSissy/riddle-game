import { inject, ref } from 'vue'
import { getRiddle } from '../api/get-riddle.ts'

export interface Riddle {
  correct: string[]
  wrong: string[]
  words: string[][]
}

export const RIDDLE_KEY = 'riddle'

export const riddleContext = {
  clue: ref(''),
  correct: ref<string>(''),
  wrong: ref<string>(''),
  phrase: ref<string>(''),
  is_win: ref<boolean>(false)
}

getRiddle().then((riddle) => {
  riddleContext.clue.value = riddle.clue
  riddleContext.phrase.value = riddle.phrase
  riddleContext.correct.value = riddle.correct
  riddleContext.wrong.value = riddle.wrong
  riddleContext.is_win.value = riddle.is_win
})

export const getRiddleContext = () => {
  return inject(RIDDLE_KEY, riddleContext)
}