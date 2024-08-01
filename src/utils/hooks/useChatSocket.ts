import { apiFunction } from '@/api/api'
import { Message } from '@/model/MessageModel'
import { useDispatchMessages } from '@/reducer/context/messages/messagesContext'
import { useStateRecipient } from '@/reducer/context/recipient/recipientContext'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useChatSocket = () => {
  const { recipient } = useStateRecipient()
  const { setMessages, setMessagesArray } = useDispatchMessages()
  const [socket, setSocket] = useState<Socket | null>(null)
  const [chatId, setChatId] = useState<string | null>(null)

  const URL = `${import.meta.env.VITE_APP_BASE_URL}/private-chats`
  const userId = Cookies.get('userId')
  const recipientId = recipient?.id

  const {
    data: privateMessagesData,
    isLoading: privateMessagesLoading,
    error: privateMessagesError,
  } = useQuery<Message[]>({
    queryKey: ['private-messages', recipientId],
    queryFn: () => apiFunction.getPrivateMessage({ id: recipientId }),
    enabled: !!recipientId,
  })

  useEffect(() => {
    if (privateMessagesData) {
      setMessagesArray(privateMessagesData)
    }

    if (!privateMessagesData) {
      setMessagesArray([])
    }
  }, [privateMessagesData, setMessagesArray])

  useEffect(() => {
    if (userId && recipientId) {
      const sortByFirst = [userId, recipient.id].sort()
      const newChatId = sortByFirst.join('')
      setChatId(newChatId)

      const newSocket = io(URL, {
        query: {
          userId,
          recipientId,
        },
      })

      newSocket.on('connect', () => {
        if (recipientId) {
          newSocket.emit('join private', recipientId)
        }

        newSocket.on('newMessage', (newMessage: Message) => {
          setMessages(newMessage)
        })
      })

      setSocket(newSocket)

      return () => {
        newSocket.disconnect()
      }
    }
  }, [URL, recipient, recipientId, setMessages, userId])

  return {
    socket,
    chatId,
    userId,
    privateMessagesLoading,
    privateMessagesError,
  }
}
