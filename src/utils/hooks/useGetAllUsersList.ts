import { apiFunction } from '@/api/api'
import { useQuery } from '@tanstack/react-query'

export const useGetAllUsersList = () => {
  const {
    data: allUsersListData,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: apiFunction.getUser,
  })

  if (usersLoading)
    return { status: 'usersListLoading', message: 'Carregando...' }
  if (usersError)
    return {
      status: 'error',
      message: 'Ocorreu um erro ao buscar os usuários da sua lista',
    }

  const users = allUsersListData ? Object.values(allUsersListData).flat() : []

  return {
    users,
    usersListLoading: false,
    usersListError: false,
  }
}
