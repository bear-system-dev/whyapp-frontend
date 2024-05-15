import { apiFunction } from '@/api/api'
import { GroupResponse } from '@/model/GroupModel'
import { useQuery } from '@tanstack/react-query'

export const useGetGroupsChats = () => {
  const {
    data,
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

  const groupsList = data

  return { groupsList, groupsLoading, groupsError }
}
