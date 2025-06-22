import type { Riddle } from './type.ts'
import { client } from "../../shared/api/client.ts"

export const guessChars = async (key: string) => {
  const response = await client.post('/game', { char: key })

  return response.data as Riddle
}
