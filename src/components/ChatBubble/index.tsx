import { Message } from '@/model/MessageModel'
import Cookies from 'js-cookie'
import React, { ReactNode } from 'react'
import SentAt from './components/sendAt'

export interface BubbleChatProps extends Message {
  children: ReactNode
}

const userId = Cookies.get('userId')

const ChatBubble: React.FC<BubbleChatProps> = ({
  mensagem: message,
  createdAt,
  fromUserId,
}) => {
  return (
    <div
      style={{
        flex: '0 1 auto',
        maxWidth: '100%',
        height: 'fit-content',
        padding: '1rem',
        backgroundColor: `${fromUserId === userId ? 'var(--shadow-primary-500)' : 'var(--neutral-600)'}`,
        borderRadius: '14px',
        color: '#FFFFFF',
        marginLeft: '4rem',
        wordWrap: 'break-word',
      }}
    >
      <p
        style={{
          width: 'max-content',
          maxWidth: '22.5rem',
        }}
      >
        {message}
      </p>
      {createdAt && <SentAt time={createdAt} />}
    </div>
  )
}
export default ChatBubble
