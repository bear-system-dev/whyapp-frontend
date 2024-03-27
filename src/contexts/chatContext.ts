import { Message } from '@/model/MessageModel'
import { Recipient } from '@/model/RecipientModel'
import { Dispatch, SetStateAction, createContext } from 'react'

export const ChatContext = createContext<{
  messages: Message[]
  setMessages: Dispatch<SetStateAction<Message[]>>
  recipient: Recipient | null
  setRecipient: Dispatch<SetStateAction<Recipient | null>>
}>({
  messages: [],
  setMessages: () => {},
  recipient: null,
  setRecipient: () => {},
})
