import { Flex } from 'antd'
import React from 'react'
import ProfileContact from '../profile'
import MensageContent from './components/mensage'
import SendedAt from './components/sendedAt'

interface BubbleConfig {
  image?: string
  username: string
  cargo?: string
  color: string
  chatprivate: boolean
  mensage: string
  time: string
}

const BubbleChat: React.FC<BubbleConfig> = ({
  image,
  username,
  cargo,
  color,
  chatprivate,
  mensage,
  time,
}) => {
  return (
    <Flex
      vertical
      style={{
        gap: '0.5rem',
      }}
    >
      {!chatprivate && (
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
        <MensageContent text={mensage} />
        <SendedAt time={time} />
      </Flex>
    </Flex>
  )
}
export default BubbleChat
