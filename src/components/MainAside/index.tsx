import { apiFunction } from '@/api/api'
import whyAppLogo from '@/assets/whyAppLogo.png'
import { ChatContext } from '@/contexts/chatContext'
import { useQuery } from '@tanstack/react-query'
import { Avatar, Button, Divider, Flex } from 'antd'
import { useContext } from 'react'
import { NewChat } from '../NewChat'
import { Search } from '../Search'
import { SettingsMenu } from '../SettingsMenu'
import './styles.css'

const mainAsideContainer: React.CSSProperties = {
  background: 'linear-gradient(to bottom right, #00000040, #C4C4C41A)',
  height: '100%',
  padding: '1.5rem 0 1.5rem',
  width: '100%',
}

const avatarButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  padding: '0',
  height: 50,
}

const userChatContainerStyle: React.CSSProperties = {
  maxHeight: '70vh',
  overflowY: 'auto',
  scrollbarGutter: 'stable',
  width: '100%',
}

const dividerStyle: React.CSSProperties = {
  background: '#FFFFFFBF',
  margin: '1rem 0',
}

export const MainAside = () => {
  const { setRecipient } = useContext(ChatContext)

  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: apiFunction.getUser,
  })

  if (isLoading) return 'Carregando...'
  if (error) return 'Ocorreu um erro ao buscar os usuários da sua lista'

  const users = data ? Object.values(data) : []

  console.log(users)

  return (
    <Flex vertical style={mainAsideContainer}>
      <Flex style={userChatContainerStyle} vertical align="center" gap={16}>
        {users.flat().map((user) => {
          return (
            <Button
              shape="circle"
              key={user.id}
              style={avatarButtonStyle}
              onClick={() => {
                setRecipient({
                  id: user.id,
                  nome: user.nome,
                  avatar: user.avatar,
                })
              }}
            >
              <Avatar
                style={{ backgroundColor: '#fff' }}
                src={user.avatar}
                size={50}
              />
            </Button>
          )
        })}
      </Flex>
      <Divider style={dividerStyle} />

      <Flex vertical flex={1} align="center" justify="end" gap={24}>
        <NewChat />
        <Search />
        <SettingsMenu />
        <img src={whyAppLogo} alt="WhyApp Logo" height={24} width={24} />
      </Flex>
    </Flex>
  )
}
