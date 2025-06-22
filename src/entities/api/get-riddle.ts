import type { Riddle } from './type.ts'
import { client } from '../../shared/api/client.ts'

export const getRiddle = async () => {
  const response = await client.get('/game')

  return response.data as Riddle
}
