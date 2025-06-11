import type { Riddle } from '../riddle/context.ts'
import { phrase } from './config.ts'

export const getRiddle = (): Riddle => {

  const words = phrase.replace(/[А-ЯЁ]/gi, '_').split(' ').map((word) => word.split(''))

  return {
    clue: phrase,
    correct: [],
    wrong: [],
    words,
  }
}
