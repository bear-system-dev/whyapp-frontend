import { api } from '@/lib/api'
import { User, UserResponse } from '@/model/UserModel'
import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.withCredentials = true

async function getUser(): Promise<User[]> {
  try {
    const token = Cookies.get('token')

    if (!token) {
      console.log('não há token')
    }
    const response = await api.get<User[]>('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 999,
      },
    })
    return response.data
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}

async function getMyProfileInfo(): Promise<User> {
  try {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')

    if (!token) {
      console.log('não há token')
    }

    const response = await api.get<UserResponse>(`/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data.user
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}

async function updateMyProfileInfo({
  avatar,
  nome,
  descricao,
}: Partial<User>): Promise<User> {
  try {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')

    if (!token) {
      console.log('não há token')
    }

    const response = await api.post<UserResponse>(
      `/user/update/${userId}`,
      { avatar, nome, descricao },
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    )
    return response.data.user
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}

async function postFriendsUser(friendId: string) {
  try {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')

    console.log('token', token)
    console.log(userId, friendId)

    const response = await api.post('/user/amigos', {
      params: { userId, friendId },
      headers: { Authorization: `Bearer ${token}` },
    })

    return response
  } catch (error) {
    console.error('Algo saiu mal na requisição: ', error)
  }
}

async function deleteFriendsUser(friendId: string) {
  try {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')

    console.log('token', token)
    console.log(userId, friendId)

    const response = await api.delete('/user/amigos', {
      params: { userId, friendId },
      headers: { Authorization: `Bearer ${token}` },
    })

    return response
  } catch (error) {
    console.error('Algo saiu mal na requisição: ', error)
  }
}
async function updateMyPassword({ senha }: Partial<User>): Promise<User> {
  try {
    const userId = Cookies.get('userId')

    const response = await api.post<UserResponse>(`/user/update/${userId}`, {
      senha,
    })
    return response.data.user
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}

export const apiFunction = {
  getUser,
  getMyProfileInfo,
  updateMyProfileInfo,
  postFriendsUser,
  deleteFriendsUser,
  updateMyPassword,
}
