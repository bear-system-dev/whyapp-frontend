import { api } from '@/lib/api'
import { GroupMessage } from '@/model/GroupMessageModel'
import { Group, GroupResponse } from '@/model/GroupModel'
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
    const response = await api.get<User[]>('user', {
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

    const response = await api.get<UserResponse>(`user/${userId}`, {
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
      `user/update/${userId}`,
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

async function updateMyPassword({ senha }: Partial<User>): Promise<User> {
  try {
    const userId = Cookies.get('userId')

    const response = await api.post<UserResponse>(`user/update/${userId}`, {
      senha,
    })
    return response.data.user
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}

async function addFriend(userId: string, friendId: string) {
  try {
    const token = Cookies.get('token')

    const response = await api.post(
      'user/amigos',
      {},
      {
        params: {
          userId,
          friendId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response
  } catch (error) {
    console.error('Algo saiu mal na requisição: ', error)
  }
}

async function removeFriend(userId: string, friendId: string) {
  try {
    const token = Cookies.get('token')

    const response = await api.delete('user/amigos', {
      params: {
        userId,
        friendId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    return response
  } catch (error) {
    console.error('Algo saiu mal na requisição: ', error)
  }
}

async function createGroup({ nome, foto, descricao }: Partial<Group>) {
  try {
    const userId = Cookies.get('userId')
    const token = Cookies.get('token')

    const response = await api.post(
      'groups',
      {
        nome,
        foto,
        descricao,
        proprietarioId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
  }
}

async function getUserGroups(): Promise<GroupResponse[]> {
  try {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')

    if (!token) {
      console.log('não há token')
    }

    const response = await api.get<{ groupsInfo: GroupResponse[] }>(
      `groups/user-groups`,
      {
        params: {
          userId,
        },

        headers: { Authorization: `Bearer ${token}` },
      },
    )
    return response.data.groupsInfo
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}

async function sendNewGroupMessage({ mensagem, groupId }: GroupMessage) {
  try {
    const usuarioId = Cookies.get('userId')
    const token = Cookies.get('token')

    const response = await api.post(
      'group-messages',
      {
        mensagem,
        groupId,
        usuarioId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
  }
}

export const apiFunction = {
  getUser,
  getMyProfileInfo,
  updateMyProfileInfo,
  addFriend,
  removeFriend,
  updateMyPassword,
  createGroup,
  getUserGroups,
  sendNewGroupMessage,
}
