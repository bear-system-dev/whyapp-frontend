import { apiFunction } from '@/api/api'
import { FriendsPostProps } from '@/components/MenuInfo/components/ModalAlert'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const AddMemberMutation = () => {
  const queryClient = useQueryClient()

  const addMembersGroup = useMutation({
    mutationFn: ({
      groupId,
      members,
    }: {
      groupId: string | undefined
      members: FriendsPostProps[]
    }) => {
      return apiFunction.newFriendGroup(groupId, members)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] })
    },
    onError: (error) => {
      console.error('Algo saiu mal na requisição:', error)
    },
  })

  return addMembersGroup
}
export const RemMemberMutation = () => {
  const queryClient = useQueryClient()

  const removeMembersGroup = useMutation({
    mutationFn: ({
      groupId,
      members,
    }: {
      groupId: string | undefined
      members: FriendsPostProps[]
    }) => {
      return apiFunction.removeMembersGroup(groupId, members)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] })
    },

    onError: (error) => {
      console.error('Algo saiu mal na requisição:', error)
    },
  })

  return removeMembersGroup
}
