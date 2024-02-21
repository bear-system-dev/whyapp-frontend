import { Flex } from 'antd'
import React, { ReactNode } from 'react'
import ProfileContact from '../profile'
import SendedAt from './components/sendedAt'

export interface ChatMessageProps {
  image?: string
  username: string
  cargo?: string
  color: string
  chatPrivate: boolean
  time: string
  message?: string
  children?: ReactNode
}

const BubbleChat: React.FC<ChatMessageProps> = ({
  image,
  username,
  cargo,
  color,
  chatPrivate,
  time,
  children,
}) => {
  return (
    <Flex
      vertical
      style={{
        gap: '0.5rem',
      }}
    >
      {!chatPrivate && (
        <ProfileContact image={image} username={username} cargo={cargo} />
      )}
      <Flex
        vertical
        style={{
          width: 'fit-content',
          padding: '1rem',
          backgroundColor: `${color}`,
          borderRadius: '14px',
          marginLeft: '4rem',
          wordWrap: 'break-word',
        }}
      >
        {children}
        <SendedAt time={time} />
      </Flex>
    </Flex>
  )
}
export default BubbleChat
