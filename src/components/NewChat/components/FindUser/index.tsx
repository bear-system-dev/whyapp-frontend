import { ChatContext } from '@/contexts/chatContext'
import { chatData } from '@/mocks/chats-mocks'
import { Flex, Input } from 'antd'
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
  height: '24px',
  width: '100%',
  gap: '20px',
  alignItems: 'center',
}

export const FindUser = () => {
  const [userNameSearchedList, setUserNameSearchedList] = useState('')
  const { setCurrentUser } = useContext(ChatContext)

  const onFindInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const findUserNameValue = event?.target.value
    setUserNameSearchedList(findUserNameValue)
  }

  const filteredUserNameList = chatData.filter((user) => {
    return user.username
      .toLowerCase()
      .includes(userNameSearchedList.toLowerCase())
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
        {userNameSearchedList &&
          filteredUserNameList.map((user, index) => {
            return (
              <UserCard
                key={index}
                name={user.username}
                image={user.image}
                onClick={() => {
                  setCurrentUser({
                    userId: user.userId,
                    username: user.username,
                    image: user.image,
                    color: user.color,
                    chatPrivate: user.chatPrivate,
                    privateMessages: user.privateMessages,
                    groupMessages: user.groupMessages,
                  })
                }}
              />
            )
          })}
      </Flex>
    </>
  )
}
