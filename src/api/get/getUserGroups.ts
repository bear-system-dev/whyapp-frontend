import { api } from '@/lib/api'
import { GroupResponse } from '@/model/GroupModel'
import Cookies from 'js-cookie'

export default async function getUserGroups(): Promise<GroupResponse[]> {
  try {
    const token = Cookies.get('token')
    const userId = Cookies.get('userId')

    if (!token) {
      console.log('não há token')
    }

    const response = await api.get<{ groupsInfo: GroupResponse[] }>(
      `/groups/user-groups`,
      {
        params: {
          userId,
        },

        headers: { Authorization: `Bearer ${token}` },
      },
    )

    const groupsData = response.data.groupsInfo

    const groups = groupsData ? Object.values(groupsData).flat() : []

    return groups
  } catch (error) {
    console.error('Algo saiu mal na requisição:', error)
    throw error
  }
}
