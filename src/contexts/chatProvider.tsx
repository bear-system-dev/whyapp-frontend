import { Message } from '@/model/MessageModel'
import { Recipient } from '@/model/RecipientModel'
import { ReactNode, useState } from 'react'
import { ChatContext } from './chatContext'

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [recipient, setRecipient] = useState<Recipient | null>(null)

  return (
    <ChatContext.Provider
      value={{ messages, setMessages, recipient, setRecipient }}
    >
      {children}
    </ChatContext.Provider>
  )
}
