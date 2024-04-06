import { apiFunction } from '@/api/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const CreateNewGroupMutation = () => {
  const queryClient = useQueryClient()

  const createNewGroupMutation = useMutation({
    mutationFn: ({
      nome,
      foto,
      descricao,
    }: {
      nome: string
      foto: string
      descricao: string
    }) => {
      return apiFunction.createGroup({ nome, foto, descricao })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['groups'] })
    },

    onError: (error) => {
      console.error('Algo saiu mal na requisição:', error)
    },
  })

  return createNewGroupMutation
}
