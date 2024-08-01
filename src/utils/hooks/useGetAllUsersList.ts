import { apiFunction } from '@/api/api'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export const useGetAllUsersList = () => {
  const {
    data: allUsersListData,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: apiFunction.getUser,
  })

  const users = useMemo(
    () => ({
      users: allUsersListData ? Object.values(allUsersListData).flat() : [],
      usersListLoading: false,
      usersListError: false,
    }),
    [allUsersListData],
  )

  if (usersLoading)
    return {
      status: 'usersListLoading',
      message: 'Carregando...',
      users: undefined,
      usersListLoading: true,
    }
  if (usersError)
    return {
      status: 'error',
      message: 'Ocorreu um erro ao buscar os usuários da sua lista',
      usersListError: true,
    }

  return users
}
