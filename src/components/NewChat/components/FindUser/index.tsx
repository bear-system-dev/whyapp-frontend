import { ChatContext } from '@/contexts/chatContext'
import { Button, Flex, Input } from 'antd'
import { ChangeEvent, Key, useContext, useState } from 'react'
import { UserCard } from '../UserCard'
import './styles.css'
import { apiFunction } from '@/api/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { User } from '@/model/UserModel'
import { PlusOutlined } from '@ant-design/icons'
import Cookies from 'js-cookie'

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
  const [userNameSearchedList, setUserNameSearchedList] = useState('')
  const [userfriend, setUserFriends] = useState<User>()
  const userId = Cookies.get('userId')

  const { data, isLoading, isError } = useQuery<User[], Error>({
    queryKey: ['user-list'],
    queryFn: apiFunction.getUser,
  })

  const { mutate } = useMutation({
    mutationFn: () => apiFunction.postFriendsUser(userfriend?.id || ''),
  })

  const dataArray = data ? Object.values(data) : []

  const { setCurrentUser } = useContext(ChatContext)

  const onFindInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const findUserNameValue = event?.target.value
    setUserNameSearchedList(findUserNameValue)
  }

  const filteredUserNameList = dataArray.flat().filter((user: User) => {
    return user?.nome
      ?.toLowerCase()
      .includes(userNameSearchedList.toLowerCase())
  })
  const onClickUserCard = (user: User) => {
    console.log('esse card foi clicado')
    setCurrentUser({
      userId: user.id,
      username: user.nome,
      image: user.avatar,
      chatPrivate: user.ativo,
    })
    setUserFriends(user)
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
        {isLoading && <h3>carregando...</h3>}
        {isError && <h3>Algo ocorreu... peun peun peeuun</h3>}
        {userNameSearchedList &&
          filteredUserNameList
            ?.filter((userNome) => userNome.id !== userId)
            .map((user: User, index: Key | null | undefined) => {
              return (
                <>
                  <div className="userCardStyle">
                    <UserCard
                      key={index}
                      name={user.nome}
                      image={user.avatar}
                      onClick={() => onClickUserCard(user)}
                    />
                    <Button
                      style={newChatButtonStyle}
                      className="newChatButtonStyle"
                      shape="circle"
                      icon={<PlusOutlined />}
                      typeof="primary"
                      onClick={() => mutate()}
                    />
                  </div>
                </>
              )
            })}
      </Flex>
    </>
  )
}
