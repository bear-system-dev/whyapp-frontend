import { Message } from '@/model/MessageModel'
import { Recipient, RecipientGroup } from '@/model/RecipientModel'
import { Dispatch, SetStateAction, createContext } from 'react'

export const ChatContext = createContext<{
  messages: Message[]
  setMessages: Dispatch<SetStateAction<Message[]>>
  recipient: Recipient | null
  setRecipient: Dispatch<SetStateAction<Recipient | null>>
  recipientGroup: RecipientGroup | null
  setRecipientGroup: Dispatch<SetStateAction<RecipientGroup | null>>
}>({
  messages: [],
  setMessages: () => {},
  recipient: null,
  setRecipient: () => {},
  recipientGroup: null,
  setRecipientGroup: () => {},
})
