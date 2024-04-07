import { apiFunction } from '@/api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useGroupChatSocket } from './useGroupChatSocket'

export const SendNewGroupMessage = () => {
  const { socket } = useGroupChatSocket()
  const queryClient = useQueryClient()

  const sendNewGroupMessageMutation = useMutation({
    mutationFn: ({
      mensagem,
      groupId,
    }: {
      mensagem: string
      groupId: string
    }) => {
      return apiFunction.sendNewGroupMessage({ mensagem, groupId })
    },
    onSuccess: (response) => {
      socket?.emit('newGroupMessage', response?.data.id)

      queryClient.invalidateQueries({ queryKey: ['group-messages'] })
    },

    onError: (error) => {
      console.error('Algo saiu mal na requisição:', error)
    },
  })

  return sendNewGroupMessageMutation
}
