import defaultAvatar from '@/assets/defaultAvatar.svg'
import { ChatContext } from '@/contexts/chatContext'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { Flex } from 'antd'
import { useContext } from 'react'
import UserRole from './Role'
import ProfileImage from './ProfileImage'
import ProfileName from './ProfileName'

type ProfileContactProps = {
  fromUserId: string
}

export default function ProfileContact({ fromUserId }: ProfileContactProps) {
  const { recipientGroup } = useContext(ChatContext)
  const { users } = useGetUsersAndFriends()

  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })

  const fromUser = groupUsers?.find((user) => user?.id === fromUserId)

  return (
    <Flex key={fromUser?.id} align="center" gap="0.5rem">
      <ProfileImage size="2.5rem" image={fromUser?.avatar || defaultAvatar} />
      <Flex vertical align="start">
        <UserRole role={'member'} />
        {fromUser?.nome && (
          <ProfileName colortext="#FFF" name={fromUser.nome} />
        )}
      </Flex>
    </Flex>
  )
}
