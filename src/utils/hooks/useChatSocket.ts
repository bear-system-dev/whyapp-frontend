import { ChatContext } from '@/contexts/chatContext'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { io } from 'socket.io-client'

export const useChatSocket = () => {
  const { recipient } = useContext(ChatContext)

  const URL = import.meta.env.VITE_APP_BASE_URL
  const userId = Cookies.get('userId')
  const recipientId = recipient?.id

  const sortByFirst = [userId, recipientId].sort()
  const chatId = sortByFirst.join('')

  const socket = io(URL, {
    query: {
      userId,
      recipientId,
    },
  })

  return { socket, chatId }
}
