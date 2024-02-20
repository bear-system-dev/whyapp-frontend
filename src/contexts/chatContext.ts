import { ChatMessageProps } from '@/components/bubblechat'
import { createContext } from 'react'

export const ChatContext = createContext<{
  messages: ChatMessageProps[]
  addMessage: (message: ChatMessageProps) => void
}>({ messages: [], addMessage: () => {} })
