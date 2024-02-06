import { Flex } from 'antd'
import MensageContent from './components/mensage'
import SendedAt from './components/sendedAt'
import React from 'react'
import ProfileContact from './components/profile'

interface BubbleConfig {
  username?: string
  cargo?: string
  color: string
  chatprivate: boolean
  mensage: string
  time: string
}

const BubbleChat: React.FC<BubbleConfig> = ({
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
        gap: '5px',
      }}
    >
      {chatprivate && <ProfileContact username={username} cargo={cargo} />}
      <Flex
        vertical
        style={{
          width: 'fit-content',
          padding: '14px',
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
