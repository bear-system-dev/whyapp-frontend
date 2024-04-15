import { ChatContext } from '@/contexts/chatContext'
import { Message } from '@/model/MessageModel'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useChatSocket = () => {
  const { recipient, setMessages } = useContext(ChatContext)
  const [socket, setSocket] = useState<Socket | null>(null)
  const [chatId, setChatId] = useState<string | null>(null)

  const URL = import.meta.env.VITE_APP_BASE_URL
  const userId = Cookies.get('userId')
  const recipientId = recipient?.id

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
        if (newChatId) {
          newSocket.emit('join private', newChatId)
          newSocket.emit('getMessages', newChatId)
        }
      })

      newSocket.on('messages', (messages: Message[]) => {
        setMessages(messages)
      })

      newSocket.on('newMessage', (newMessage: Message) => {
        setMessages((previousMessages) => {
          const messageExists = previousMessages.some(
            (message) => message.id === newMessage.id,
          )

          if (messageExists) {
            return previousMessages
          }

          return [...previousMessages, newMessage]
        })
      })

      setSocket(newSocket)

      return () => {
        newSocket.disconnect()
      }
    }
  }, [recipient])

  return { socket, chatId, userId }
}
