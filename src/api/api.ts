import { User } from '@/model/UserModel'
import { api } from '@/lib/api'
import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.withCredentials = true

async function getUser(): Promise<User[]> {
  const token = Cookies.get('token')

  if (!token) {
    console.log('não há token')
  }
  const response = await api.get<User[]>('/user', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  return response.data
}

export const apiFunction = {
  getUser,
}
