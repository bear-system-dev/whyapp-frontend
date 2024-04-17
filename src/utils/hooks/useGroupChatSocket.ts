// useGroupChatSocket.ts
import { apiFunction } from '@/api/api'
import { ChatContext } from '@/contexts/chatContext'
import { GroupMessage } from '@/model/GroupMessageModel'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useGroupChatSocket = () => {
  const { recipientGroup, setGroupMessages } = useContext(ChatContext)
  const [socket, setSocket] = useState<Socket | null>(null)

  const URL = `${import.meta.env.VITE_APP_BASE_URL}/grupos`
  const userId = Cookies.get('userId')
  const recipientGroupId = recipientGroup?.id

  const {
    data: groupMessagesData,
    isLoading: groupMessagesLoading,
    error: groupMessagesError,
  } = useQuery<GroupMessage[]>({
    queryKey: ['group-messages', recipientGroupId],
    queryFn: () => apiFunction.getGroupMessage({ grupoId: recipientGroupId }),
    enabled: !!recipientGroupId,
  })

  useEffect(() => {
    if (groupMessagesData) {
      setGroupMessages(groupMessagesData)
    }
  }, [groupMessagesData])

  useEffect(() => {
    if (userId && recipientGroupId) {
      const newSocket = io(URL)

      newSocket.on('connect', () => {
        if (recipientGroupId) {
          newSocket.emit('join group', recipientGroupId)
        }

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
      })

      setSocket(newSocket)

      return () => {
        newSocket.disconnect()
      }
    }
  }, [recipientGroupId])

  return {
    recipientGroupId,
    socket,
    userId,
    groupMessagesData,
    groupMessagesLoading,
    groupMessagesError,
  }
}
