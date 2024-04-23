import { GroupMessage } from '@/model/GroupMessageModel'
import { Message } from '@/model/MessageModel'
import { Recipient, RecipientGroup } from '@/model/RecipientModel'
import { Dispatch, SetStateAction, createContext } from 'react'

export const ChatContext = createContext<{
  messages: Message[]
  setMessages: Dispatch<SetStateAction<Message[]>>
  groupMessages: GroupMessage[]
  setGroupMessages: Dispatch<SetStateAction<GroupMessage[]>>
  recipient: Recipient | null
  setRecipient: Dispatch<SetStateAction<Recipient | null>>
  recipientGroup: RecipientGroup | null
  setRecipientGroup: Dispatch<SetStateAction<RecipientGroup | null>>
}>({
  messages: [],
  setMessages: () => {},
  groupMessages: [],
  setGroupMessages: () => {},
  recipient: null,
  setRecipient: () => {},
  recipientGroup: null,
  setRecipientGroup: () => {},
})
