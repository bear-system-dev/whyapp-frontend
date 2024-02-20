import { ChatMessageProps } from '@/components/bubblechat'
import { chatData } from '@/mocks/chats-mocks'
import { ReactNode, useState } from 'react'
import { ChatContext } from './chatContext'

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<ChatMessageProps[]>(chatData)

  const addMessage = (message: ChatMessageProps) => {
    setMessages((prevMessages) => [...prevMessages, message])
  }

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  )
}
