import { apiFunction } from '@/api/api'
import { GroupMessage } from '@/model/GroupMessageModel'
import { useDispatchMessages } from '@/reducer/context/messages/messagesContext'
import { useStateRecipient } from '@/reducer/context/recipient/recipientContext'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useGroupChatSocket = () => {
  const { recipientGroup } = useStateRecipient()
  const { setGroupMessages, setGroupMessagesArray } = useDispatchMessages()
  const [socket, setSocket] = useState<Socket | null>(null)

  const URL = `${import.meta.env.VITE_APP_BASE_URL}/group-chats`
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
      setGroupMessagesArray(groupMessagesData)
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
          setGroupMessages(newGroupMessage)
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
