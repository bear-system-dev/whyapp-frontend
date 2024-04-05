import { apiFunction } from '@/api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const SendNewGroupMessage = () => {
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['group-messages'] })
    },
  })

  return sendNewGroupMessageMutation
}
