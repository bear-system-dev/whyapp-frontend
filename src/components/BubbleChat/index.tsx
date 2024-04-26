import { Message } from '@/model/MessageModel'
import { Flex } from 'antd'
import Cookies from 'js-cookie'
import React, { ReactNode } from 'react'
import SentAt from './components/sendAt'

export interface BubbleChatProps extends Message {
  children: ReactNode
}

const userId = Cookies.get('userId')

const BubbleChat: React.FC<BubbleChatProps> = ({
  mensagem,
  createdAt,
  fromUserId,
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
          backgroundColor: `${fromUserId === userId ? '#3F7B40' : '#434455'}`,
          borderRadius: '14px',
          color: '#FFFFFF',
          marginLeft: '4rem',
          wordWrap: 'break-word',
        }}
      >
        {mensagem}
        {createdAt && <SentAt time={createdAt} />}
      </Flex>
    </Flex>
  )
}
export default BubbleChat
