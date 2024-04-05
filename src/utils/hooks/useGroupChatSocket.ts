import { ChatContext } from '@/contexts/chatContext'
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

export const useGroupChatSocket = () => {
  const { recipientGroup } = useContext(ChatContext)
  const [socket, setSocket] = useState<Socket | null>(null)

  const URL = `${import.meta.env.VITE_APP_BASE_URL}/grupos`
  const userId = Cookies.get('userId')
  const recipientGroupId = recipientGroup?.id

  const sortByFirst = [userId, recipientGroupId].sort()
  const chatId = sortByFirst.join('')

  useEffect(() => {
    if (userId && recipientGroupId) {
      const newSocket = io(URL, {
        query: {
          userId,
          recipientGroupId,
        },
      })

      setSocket(newSocket)
    }

    return () => {
      socket?.disconnect()
    }
  }, [recipientGroup])

  return { recipientGroupId, socket, chatId, userId }
}
