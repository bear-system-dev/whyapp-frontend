import { apiFunction } from '@/api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useGroupChatSocket } from './useGroupChatSocket'

export const SendNewGroupMessage = () => {
  const { socket } = useGroupChatSocket()
  const queryClient = useQueryClient()

  const sendNewGroupMessageMutation = useMutation({
    mutationFn: ({
      mensagem,
      grupoId,
    }: {
      mensagem: string
      grupoId: string
    }) => {
      return apiFunction.sendNewGroupMessage({ mensagem, grupoId })
    },
    onSuccess: (response) => {
      if (socket && socket.connected) {
        socket.emit('newGroupMessage', response?.data.data.id)
      }

      queryClient.invalidateQueries({ queryKey: ['group-messages'] })
    },

    onError: (error) => {
      console.error('Algo saiu mal na requisição:', error)
    },
  })

  return sendNewGroupMessageMutation
}
