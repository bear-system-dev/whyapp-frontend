import { apiFunction } from '@/api/api'
import { useQuery } from '@tanstack/react-query'

export const useGetUsersAndFriends = () => {
  const {
    data: usersData,
    isLoading: usersLoading,
    error: usersError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: apiFunction.getUser,
  })

  const {
    data: myProfileData,
    isLoading: profileLoading,
    error: profileError,
  } = useQuery({
    queryKey: ['friends'],
    queryFn: apiFunction.getMyProfileInfo,
  })

  if (usersLoading || profileLoading)
    return { status: 'usersAndProfileLoading', message: 'Carregando...' }
  if (usersError || profileError)
    return {
      status: 'error',
      message: 'Ocorreu um erro ao buscar os usuários da sua lista',
    }

  const users = usersData ? Object.values(usersData).flat() : []
  const friends = myProfileData ? myProfileData.amigos : []
  const friendsList = users.filter((user) => friends.includes(user.id))

  return {
    users,
    friendsList,
    usersAndProfileLoading: false,
    usersAndProfileError: false,
  }
}
