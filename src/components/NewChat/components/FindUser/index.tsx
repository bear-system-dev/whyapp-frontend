import { ChatContext } from '@/contexts/chatContext'
import { Flex, Input } from 'antd'
import { ChangeEvent, Key, useContext, useState } from 'react'
import { UserCard } from '../UserCard'
import './styles.css'
import { apiFunction } from '@/api/api'
import { useQuery } from '@tanstack/react-query'
import { User } from '@/model/UserModel'

const searchInputBarStyles: React.CSSProperties = {
  background:
    'linear-gradient(to bottom right, #C9C9C94D, #C4C4C41A) padding-box, linear-gradient(to bottom left, #FFFFFF4D, #D3D3D31A) border-box',
  color: '#FFFFFF',
  display: 'flex',
  padding: '0 1rem',
  boxSizing: 'border-box',
  height: '24px',
  width: '100%',
  gap: '20px',
  alignItems: 'center',
}

export const FindUser = () => {
  const [userNameSearchedList, setUserNameSearchedList] = useState('')

  const { data, isLoading, isError } = useQuery<User[], Error>({
    queryKey: ['user-list'],
    queryFn: apiFunction.getUser,
  })

  const dataArray = data ? Object.values(data) : []
  const dataArray2 = dataArray[0]

  const { setCurrentUser } = useContext(ChatContext)

  const onFindInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const findUserNameValue = event?.target.value
    setUserNameSearchedList(findUserNameValue)
  }

  const filteredUserNameList = dataArray2?.filter((user: User) => {
    return user.nome.toLowerCase().includes(userNameSearchedList.toLowerCase())
  })

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
          filteredUserNameList?.map(
            (user: User, index: Key | null | undefined) => {
              return (
                <UserCard
                  key={index}
                  name={user.nome}
                  image={user.avatar}
                  onClick={() => {
                    setCurrentUser({
                      userId: user.id,
                      username: user.nome,
                      image: user.avatar,
                      chatPrivate: user.ativo,
                      // chatPrivate: user.chatPrivate,
                      // privateMessages: user.privateMessages,
                      // groupMessages: user.groupMessages,
                    })
                  }}
                />
              )
            },
          )}
      </Flex>
    </>
  )
}
