import { Flex } from 'antd'
import React, { ReactNode } from 'react'
import SendedAt from './components/sendedAt'

export interface UserProps {
  userId?: number
  image?: string
  username: string
  cargo?: string
  chatPrivate?: boolean
  privateMessages?: { message: string; time: string; sentByUser?: boolean }[]
  groupMessages?: { message: string; time: string; sentByUser?: boolean }[]
}

export interface BubbleChatProps {
  message: string
  time: string
  isUserMessage?: boolean
  children?: ReactNode
}

const BubbleChat: React.FC<BubbleChatProps> = ({
  message,
  time,
  isUserMessage,
}) => {
  return (
    <Flex
      vertical
      style={{
        gap: '0.5rem',
      }}
    >
      <Flex
        vertical
        style={{
          width: 'fit-content',
          padding: '1rem',
          backgroundColor: `${isUserMessage ? '#3F7B40' : '#434455'}`,
          borderRadius: '14px',
          color: '#FFFFFF',
          marginLeft: '4rem',
          wordWrap: 'break-word',
        }}
      >
        {message}
        <SendedAt time={time} />
      </Flex>
    </Flex>
  )
}
export default BubbleChat
