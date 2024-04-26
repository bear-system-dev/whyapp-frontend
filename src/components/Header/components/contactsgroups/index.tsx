import { ChatContext } from '@/contexts/chatContext'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import React, { useContext } from 'react'

const containerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '5px',
  fontSize: '14px',
  width: '77.5vw',
  color: '#FFFFFF66',
  fontWeight: 400,
  lineHeight: '100%',
  overflow: 'hidden',
}

const textStyle: React.CSSProperties = {
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
}

const ContactGroup = () => {
  const { recipientGroup } = useContext(ChatContext)
  const { users } = useGetUsersAndFriends()

  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })

  const firstEightContacts = groupUsers?.slice(0, 8)

  return (
    <div style={containerStyle}>
      {firstEightContacts?.map((member, index) => {
        const firstName = member?.nome.split(' ')[0].slice(0, 12)
        return (
          <span key={member?.id} style={textStyle}>
            {firstName}
            {index < firstEightContacts.length - 1
              ? ','
              : index === firstEightContacts.length - 1
                ? ''
                : '...'}
          </span>
        )
      })}
    </div>
  )
}

export default ContactGroup
