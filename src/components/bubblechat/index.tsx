import { Flex } from 'antd'
import React from 'react'
import ProfileContact from '../profile'
import SendedAt from './components/sendedAt'

interface BubbleConfig {
  image?: string
  username: string
  cargo?: string
  color: string
  chatPrivate: boolean
  time: string
  children?: React.ReactNode
}

const BubbleChat: React.FC<BubbleConfig> = ({
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
        }}
      >
        {children}
        <SendedAt time={time} />
      </Flex>
    </Flex>
  )
}
export default BubbleChat
