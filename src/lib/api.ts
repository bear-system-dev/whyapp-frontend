import axios from 'axios'

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  // withCredentials: true,
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    console.error('Erro na requisição:', error?.response?.data?.message)
    return Promise.reject(error)
  },
)
