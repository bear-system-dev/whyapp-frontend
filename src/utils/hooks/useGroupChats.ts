import { apiFunction } from '@/api/api'
import { GroupResponse } from '@/model/GroupModel'
import { useQuery } from '@tanstack/react-query'

export const useGroups = () => {
  const {
    data: groupsData,
    isLoading: groupsLoading,
    error: groupsError,
  } = useQuery<GroupResponse[]>({
    queryKey: ['groups'],
    queryFn: apiFunction.getUserGroups,
  })

  if (groupsLoading)
    return { status: 'groupsLoading', message: 'Carregando...' }
  if (groupsError)
    return {
      status: 'error',
      message: 'Ocorreu um erro ao buscar os usuários da sua lista',
    }

  const groups = groupsData ? Object.values(groupsData).flat() : []

  return { groups, groupsLoading: false, groupsError: false }
}
