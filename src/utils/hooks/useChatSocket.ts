import { ChatContext } from '@/contexts/chatContext'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useChatSocket = () => {
  const { recipient } = useContext(ChatContext)
  const [socket, setSocket] = useState<Socket | null>(null)
  const [chatId, setChatId] = useState<string>('')

  useEffect(() => {
    const userId = Cookies.get('userId')
    const recipientId = recipient?.id

    if (userId && recipientId) {
      const newSocket = io(`${import.meta.env.VITE_APP_BASE_URL}`, {
        query: {
          userId,
          recipientId,
        },
      })

      setSocket(newSocket)

      return () => {
        newSocket.disconnect()
      }
    }

    setSocket(null)
  }, [recipient])

  useEffect(() => {
    if (recipient && socket) {
      const userId = Cookies.get('userId')
      const recipientId = recipient?.id
      if (socket) {
        const sortByFirst = [userId, recipientId].sort()
        setChatId(sortByFirst.join(''))
      }
    }
  }, [recipient, socket])

  return { socket, chatId }
}
