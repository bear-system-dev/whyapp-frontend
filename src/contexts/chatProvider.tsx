import { GroupMessage } from '@/model/GroupMessageModel'
import { Message } from '@/model/MessageModel'
import { Recipient, RecipientGroup } from '@/model/RecipientModel'
import { ReactNode, useState } from 'react'
import { ChatContext } from './chatContext'

interface ChatProviderProps {
  children: ReactNode
}

export const ChatProvider = ({ children }: ChatProviderProps) => {
  const [messages, setMessages] = useState<Message[]>([])
  const [groupMessages, setGroupMessages] = useState<GroupMessage[]>([])
  const [recipient, setRecipient] = useState<Recipient | null>(null)
  const [recipientGroup, setRecipientGroup] = useState<RecipientGroup | null>(
    null,
  )

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        groupMessages,
        setGroupMessages,
        recipient,
        setRecipient,
        recipientGroup,
        setRecipientGroup,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
