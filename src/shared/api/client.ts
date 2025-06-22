import axios from 'axios'
import { retrieveLaunchParams, isTMA } from '@telegram-apps/sdk-vue';

const userId = isTMA() ? retrieveLaunchParams().tgWebAppData?.user?.id : window.localStorage.getItem("token")

export const client = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  headers: {'auth': userId }
})