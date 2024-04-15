// useGroupChatSocket.ts
import { apiFunction } from '@/api/api'
import { ChatContext } from '@/contexts/chatContext'
import { GroupMessage } from '@/model/GroupMessageModel'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useGroupChatSocket = () => {
  const { recipientGroup, setGroupMessages } = useContext(ChatContext)
  const [socket, setSocket] = useState<Socket | null>(null)
  const queryClient = useQueryClient()

  const URL = `${import.meta.env.VITE_APP_BASE_URL}/grupos`
  const userId = Cookies.get('userId')
  const recipientGroupId = recipientGroup?.id

  const {
    data: groupMessagesData,
    isLoading: groupMessagesLoading,
    error: groupMessagesError,
    refetch,
  } = useQuery<GroupMessage[]>({
    queryKey: ['group-messages', recipientGroupId],
    queryFn: () => apiFunction.getGroupMessage({ grupoId: recipientGroupId }),
    enabled: !!recipientGroupId,
  })

  useEffect(() => {
    if (recipientGroupId) {
      queryClient.removeQueries({
        queryKey: ['group-messages'],
      })
      refetch()
    }
  }, [recipientGroupId])

  useEffect(() => {
    if (userId && recipientGroupId) {
      const newSocket = io(URL, {
        query: {
          userId,
          recipientGroupId,
        },
      })

      newSocket.on('connect', () => {
        if (recipientGroupId) {
          newSocket.emit('join group', recipientGroupId)
          if (groupMessagesData) {
            setGroupMessages(groupMessagesData)
          }
        }
      })

      newSocket.on('newGroupMessage', (newGroupMessage: GroupMessage) => {
        setGroupMessages((previousGroupMessages) => {
          const messageExists = previousGroupMessages.some(
            (message) => message.id === newGroupMessage.id,
          )

          if (messageExists) {
            return previousGroupMessages
          }

          return [...previousGroupMessages, newGroupMessage]
        })
      })

      newSocket.on('error', (data) => {
        console.log(data)
      })

      setSocket(newSocket)
    }
  }, [recipientGroup, recipientGroupId, groupMessagesData])

  return {
    recipientGroupId,
    socket,
    userId,
    groupMessagesData,
    groupMessagesLoading,
    groupMessagesError,
  }
}
