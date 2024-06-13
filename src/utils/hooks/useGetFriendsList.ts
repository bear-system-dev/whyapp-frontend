import { apiFunction } from '@/api/api'
import { useQuery } from '@tanstack/react-query'

export const useGetFriendsList = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['friends'],
    queryFn: apiFunction.getFriendsList,
  })

  if (isLoading) return { status: 'friendsList', message: 'Carregando...' }
  if (isError)
    return {
      status: 'error',
      message: 'Ocorreu um erro ao buscar os usuários da sua lista',
    }

  const friendsList = data

  return {
    friendsList,
    friendsListLoading: isLoading,
    friendsListError: isError,
  }
}
