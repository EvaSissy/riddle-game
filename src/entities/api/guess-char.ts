import type { Riddle } from '../riddle/context.ts'
import { chars } from '../../shared/config/key.ts'
import { ref } from 'vue'
import { phrase } from './config.ts'

const actualChars = ref(chars)

export const guessChars = (key: string): Omit<Riddle, 'clue'> => {
  actualChars.value = actualChars.value.filter(char => char.toLowerCase() !== key.toLowerCase())

  const regExp = new RegExp(`[${actualChars.value.join('')}]`, 'gi')

  const words = phrase.replace(regExp, '_').split(' ').map((word) => word.split(''))

  return {
    correct: phrase.includes(key) ? [key] : [],
    wrong: !phrase.includes(key) ? [key] : [],
    words,
  }
}
