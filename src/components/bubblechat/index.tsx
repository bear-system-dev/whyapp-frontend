import { Flex } from 'antd'
import React, { ReactNode } from 'react'
import SendedAt from './components/sendedAt'

export interface BubbleChatProps {
  message: string
  time: string
  sentByMe?: boolean
  children?: ReactNode
}

export interface UserProps {
  userId?: string
  image?: string
  username: string
  cargo?: string
  chatPrivate?: boolean
  privateMessages?: BubbleChatProps[]
  groupMessages?: BubbleChatProps[]
}

const BubbleChat: React.FC<BubbleChatProps> = ({ message, time, sentByMe }) => {
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
          backgroundColor: `${sentByMe ? '#3F7B40' : '#434455'}`,
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
