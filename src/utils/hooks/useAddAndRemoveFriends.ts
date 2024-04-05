import { apiFunction } from '@/api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const AddFriendMutation = () => {
  const queryClient = useQueryClient()

  const addFriendMutation = useMutation({
    mutationFn: ({
      userId,
      friendId,
    }: {
      userId: string
      friendId: string
    }) => {
      return apiFunction.addFriend(userId, friendId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friends'] })
    },
  })

  return addFriendMutation
}

export const RemoveFriendMutation = () => {
  const queryClient = useQueryClient()

  const removeFriendMutation = useMutation({
    mutationFn: ({
      userId,
      friendId,
    }: {
      userId: string
      friendId: string
    }) => {
      return apiFunction.removeFriend(userId, friendId)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friends'] })
    },
  })

  return removeFriendMutation
}
