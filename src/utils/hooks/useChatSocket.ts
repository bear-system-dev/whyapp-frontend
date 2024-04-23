import { ChatContext } from '@/contexts/chatContext'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useChatSocket = () => {
  const { recipient } = useContext(ChatContext)
  const [socket, setSocket] = useState<Socket | null>(null)

  const URL = import.meta.env.VITE_APP_BASE_URL
  const userId = Cookies.get('userId')
  const recipientId = recipient?.id

  const sortByFirst = [userId, recipientId].sort()
  const chatId = sortByFirst.join('')

  useEffect(() => {
    if (userId && recipientId) {
      const newSocket = io(URL, {
        query: {
          userId,
          recipientId,
        },
      })

      setSocket(newSocket)
    }

    return () => {
      socket?.disconnect()
    }
  }, [recipient])

  return { socket, chatId, userId }
}
