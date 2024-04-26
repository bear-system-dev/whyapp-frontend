import { GroupMessage } from '@/model/GroupMessageModel'
import { Flex } from 'antd'
import Cookies from 'js-cookie'
import React, { ReactNode } from 'react'
import ProfileContact from '../../Profile'
import SentAt from '../components/sendAt'

export interface GroupChatBubbleProps extends GroupMessage {
  showProfileContact: boolean
  children: ReactNode
}

const userId = Cookies.get('userId')

const GroupChatBubble: React.FC<GroupChatBubbleProps> = ({
  mensagem,
  createdAt,
  usuarioId,
  showProfileContact,
}) => {
  return (
    <Flex
      vertical
      style={{
        gap: '0.5rem',
      }}
    >
      {showProfileContact && usuarioId !== userId && (
        <ProfileContact fromUserId={usuarioId} />
      )}
      <Flex
        vertical
        style={{
          width: 'fit-content',
          padding: '1rem',
          backgroundColor: `${usuarioId === userId ? '#3F7B40' : '#434455'}`,
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
export default GroupChatBubble
