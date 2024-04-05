import { ChatContext } from '@/contexts/chatContext'
import { User } from '@/model/UserModel'
import {
  AddFriendMutation,
  RemoveFriendMutation,
} from '@/utils/hooks/useAddAndRemoveFriends'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { Button, Flex, Input } from 'antd'
import Cookies from 'js-cookie'
import { ChangeEvent, useContext, useState } from 'react'
import { UserCard } from '../UserCard'
import './styles.css'

const searchInputBarStyles: React.CSSProperties = {
  background:
    'linear-gradient(to bottom right, #C9C9C94D, #C4C4C41A) padding-box, linear-gradient(to bottom left, #FFFFFF4D, #D3D3D31A) border-box',
  color: '#FFFFFF',
  display: 'flex',
  padding: '0 1rem',
  boxSizing: 'border-box',
  height: '28px',
  width: '100%',
  gap: '20px',
  alignItems: 'center',
}
const newChatButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
}

export const FindUser = () => {
  const { setRecipient } = useContext(ChatContext)
  const [userNameSearchedList, setUserNameSearchedList] = useState('')
  const userId = Cookies.get('userId')
  const { users, friendsList, usersAndProfileLoading, usersAndProfileError } =
    useGetUsersAndFriends()
  const addFriendMutation = AddFriendMutation()
  const removeFriendMutation = RemoveFriendMutation()

  const onFindInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const findUserNameValue = event?.target.value
    setUserNameSearchedList(findUserNameValue)
  }

  const filteredUserNameList = users?.filter((user: User) => {
    return user?.nome
      ?.toLowerCase()
      .includes(userNameSearchedList.toLowerCase())
  })

  const isFriend = (user: User) => {
    return friendsList?.some((friend) => friend.id === user.id)
  }

  return (
    <>
      <Input
        className="find-input-bar"
        style={searchInputBarStyles}
        onChange={onFindInputChange}
        placeholder="busque por um usuário ou grupo..."
      />
      <Flex vertical style={{ gap: '1.5rem', height: '100%', width: '100%' }}>
        {usersAndProfileLoading && <h3>carregando...</h3>}
        {usersAndProfileError && (
          <h3>
            Não foi possível carregar a lista de usuários. Por favor, tente
            novamente.
          </h3>
        )}
        {userNameSearchedList &&
          filteredUserNameList
            ?.filter((userNome) => userNome.id !== userId)
            .map((user: User) => {
              return (
                <>
                  <div className="userCardStyle">
                    <UserCard
                      key={user.id}
                      name={user.nome}
                      image={user.avatar}
                    />
                    <Button
                      style={newChatButtonStyle}
                      className="newChatButtonStyle"
                      shape="circle"
                      icon={
                        isFriend(user) ? <MinusOutlined /> : <PlusOutlined />
                      }
                      typeof="primary"
                      onClick={() => {
                        setRecipient(user)
                        if (userId) {
                          if (isFriend(user)) {
                            removeFriendMutation.mutate({
                              userId,
                              friendId: user.id,
                            })
                          } else {
                            addFriendMutation.mutate({
                              userId,
                              friendId: user.id,
                            })
                          }
                        }
                      }}
                    />
                  </div>
                </>
              )
            })}
      </Flex>
    </>
  )
}
