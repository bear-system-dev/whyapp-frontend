import { ChatContext } from '@/contexts/chatContext'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { useContext } from 'react'
import { ContainerStyle, TextStyle } from './style'

const GroupsContacts = () => {
  const { recipientGroup } = useContext(ChatContext)
  const { users } = useGetUsersAndFriends()

  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })

  const firstEightContacts = groupUsers?.slice(0, 8)

  return (
    <div style={ContainerStyle}>
      {firstEightContacts?.map((member, index) => {
        const firstName = member?.nome.split(' ')[0].slice(0, 12)
        return (
          <span key={member?.id} style={TextStyle}>
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

export default GroupsContacts
