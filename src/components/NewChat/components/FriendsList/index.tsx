import { ChatContext } from '@/contexts/chatContext'
import { User } from '@/model/UserModel'

import { RemoveFriendMutation } from '@/utils/hooks/useAddAndRemoveFriends'
import { useGetFriendsList } from '@/utils/hooks/useGetFriendsList'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { UserCard } from '../UserCard'

interface FriendsListProps {
  onClose: () => void
}

const newChatButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
}

export const FriendsList = ({ onClose }: FriendsListProps) => {
  const { setRecipient } = useContext(ChatContext)
  const userId = Cookies.get('userId')
  const { friendsList, friendsListLoading, friendsListError } =
    useGetFriendsList()
  const removeFriendMutation = RemoveFriendMutation()

  const isFriend = (user: User) => {
    return friendsList?.some((friend: User) => friend.id === user.id)
  }

  return (
    <Flex vertical style={{ gap: '1.5rem', height: '100%', width: '100%' }}>
      {friendsListLoading && <h3>carregando...</h3>}
      {friendsListError && (
        <h3>
          Não foi possível carregar a lista de usuários. Por favor, tente
          novamente.
        </h3>
      )}
      {friendsList?.map((user: User) => {
        return (
          <div key={user.id} className="userCardStyle">
            <UserCard
              name={user.nome}
              image={user.avatar}
              onClick={() => {
                setRecipient(user)
                onClose()
              }}
            />
            <Button
              style={newChatButtonStyle}
              className="newChatButtonStyle"
              shape="circle"
              icon={isFriend(user) ? <MinusOutlined /> : <PlusOutlined />}
              typeof="primary"
              onClick={async () => {
                if (userId) {
                  if (isFriend(user)) {
                    removeFriendMutation.mutate({
                      userId,
                      friendId: user.id,
                    })
                  }
                }
                setRecipient(null)
              }}
            />
          </div>
        )
      })}
    </Flex>
  )
}
