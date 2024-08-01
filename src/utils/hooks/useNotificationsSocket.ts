import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { useGetAllUsersList } from './useGetAllUsersList'
import { useDispatchIsOnline } from '@/reducer/context/isOnline/isOnline'

export const useNotificationsSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const { users } = useGetAllUsersList()
  const { setIsOnline } = useDispatchIsOnline()
  const URL = `${import.meta.env.VITE_APP_BASE_URL}/notifications`
  const userId = Cookies.get('userId')

  useEffect(() => {
    if (userId) {
      const newSocket = io(URL)

      newSocket.on('connect', () => {
        if (userId) {
          newSocket.emit('join private room', userId)
        }

        newSocket.on('isOnline', (data) => {
          if (users) {
            const updatedUsers = users.map((user) =>
              user.id === data.onlineUser.userId
                ? { ...user, isOnline: data.isOnline }
                : user,
            )
            setIsOnline(updatedUsers)
          }
        })

        newSocket.on('notification', (data) => {
          console.log(data)
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
  }, [URL, setIsOnline, userId, users])

  return { socket, userId }
}
