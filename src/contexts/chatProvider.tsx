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
    setMessages((prevMessages) => [...prevMessages, message])
  }

  return (
    <ChatContext.Provider
      value={{ messages, addMessage, currentUser, setCurrentUser }}
    >
      {children}
    </ChatContext.Provider>
  )
}
