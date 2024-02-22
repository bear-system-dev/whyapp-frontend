import { UserProps } from '@/components/bubblechat'
import { chatData } from '@/mocks/chats-mocks'
import { ReactNode, useState } from 'react'
import { ChatContext } from './chatContext'

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<UserProps[]>(chatData)
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null)

  const addMessage = (message: UserProps) => {
    const newMessage = { ...message, sentByUser: true }

    setMessages((prevMessages) => [...prevMessages, newMessage])

    setCurrentUser((prevUser) => {
      if (prevUser && message.privateMessages) {
        return {
          ...prevUser,
          privateMessages: [
            ...(prevUser.privateMessages || []),
            ...(message.privateMessages || []),
          ],
        }
      }
      return prevUser
    })
  }

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, currentUser, setCurrentUser }}
    >
      {children}
    </ChatContext.Provider>
  )
}
