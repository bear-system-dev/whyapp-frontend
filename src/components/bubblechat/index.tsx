import { Flex } from 'antd'
import React, { ReactNode } from 'react'
import SendedAt from './components/sendedAt'

export interface UserProps {
  userId?: number
  image?: string
  username: string
  cargo?: string
  color?: string
  chatPrivate?: boolean
  privateMessages?: { message: string; time: string }[]
  groupMessages?: { message: string; time: string }[]
}

interface BubbleChatProps {
  message: string
  time: string
  children?: ReactNode
}

const BubbleChat: React.FC<BubbleChatProps> = ({ message, time }) => {
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
          backgroundColor: '#434455',
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
