import { Message } from '@/model/MessageModel'
import { Flex } from 'antd'
import React, { ReactNode } from 'react'
import SendedAt from './components/sendedAt'

export interface BubbleChatProps extends Message {
  children: ReactNode
}

const BubbleChat: React.FC<BubbleChatProps> = ({
  mensagem,
  horario,
  enviadoPorMim,
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
          backgroundColor: `${enviadoPorMim ? '#3F7B40' : '#434455'}`,
          borderRadius: '14px',
          color: '#FFFFFF',
          marginLeft: '4rem',
          wordWrap: 'break-word',
        }}
      >
        {mensagem}
        <SendedAt time={horario} />
      </Flex>
    </Flex>
  )
}
export default BubbleChat
