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
  mensagem: message,
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
      <div
        style={{
          flex: '0 1 auto',
          maxWidth: '100%',
          height: 'fit-content',
          padding: '1rem',
          backgroundColor: `${usuarioId === userId ? 'var(--shadow-primary-500)' : 'var(--neutral-600)'}`,
          borderRadius: '14px',
          color: '#FFFFFF',
          marginLeft: '4rem',
          wordWrap: 'break-word',
        }}
      >
        <p
          style={{
            width: 'max-content',
            maxWidth: '22.5rem',
          }}
        >
          {message}
        </p>
        {createdAt && <SentAt time={createdAt} />}
      </div>
    </Flex>
  )
}
export default GroupChatBubble
