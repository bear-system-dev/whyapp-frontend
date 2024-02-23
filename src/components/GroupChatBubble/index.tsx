import { Flex } from 'antd'
import React, { ReactNode } from 'react'
import ProfileContact from '../profile'
import SendedAt from './components/sendedAt'

interface GroupChatBubbleProps {
  username: string
  image?: string
  cargo?: string
  chatPrivate: boolean
  message: string
  time: string
  color: string
  groupMessages: { message: string; time: string }[]
  children?: ReactNode
}

const GroupChatBubble: React.FC<GroupChatBubbleProps> = ({
  username,
  image,
  cargo,
  color,
  chatPrivate,
  groupMessages,
}) => {
  return (
    <Flex
      vertical
      style={{
        gap: '0.5rem',
      }}
    >
      {chatPrivate === false && (
        <>
          <ProfileContact image={image} username={username} cargo={cargo} />
          {groupMessages.map((message, index) => (
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
              key={index}
            >
              {message.message}
              <SendedAt time={message.time} />
            </Flex>
          ))}
        </>
      )}
    </Flex>
  )
}
export default GroupChatBubble
