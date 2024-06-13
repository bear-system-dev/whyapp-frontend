import { api } from '@/lib/api'
import { User, UserResponse } from '@/model/UserModel'
import Cookies from 'js-cookie'

export default async function getFriendsList(): Promise<User[]> {
  try {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')

    if (!token || !userId) {
      console.log('Token ou ID do usuário não encontrado.')
    }

    const myProfileResponse = await api.get<UserResponse>(`/user/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })

    const usersResponse = await api.get<User[]>('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 999,
      },
    })

    const myProfileDataFriends = myProfileResponse.data.user.amigos
    const usersData = usersResponse.data

    const users = usersData ? Object.values(usersData).flat() : []
    const friendsList = users.filter((user) =>
      myProfileDataFriends.includes(user.id),
    )

    return friendsList
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}
