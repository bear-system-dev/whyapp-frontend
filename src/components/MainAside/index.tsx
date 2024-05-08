import whyAppLogo from '@/assets/whyAppLogo.png'
import { ChatContext } from '@/contexts/chatContext'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { useGetGroupsChats } from '@/utils/hooks/useGroupChats'
import { Avatar, Button, Divider, Flex } from 'antd'
import { useContext } from 'react'
import { NewChat } from '../NewChat'
import { Search } from '../Search'
import { SettingsMenu } from '../SettingsMenu'
import './styles.css'
import Drawer from 'antd'

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

interface MainAsideProps {
  setOpenMain: React.Dispatch<React.SetStateAction<boolean>>
  openMain: boolean
}

export const MainAside = ({openMain, setOpenMain}: MainAsideProps) => {
  const { setRecipient, setRecipientGroup } = useContext(ChatContext)
  const { friendsList, usersAndProfileLoading, usersAndProfileError } =
    useGetUsersAndFriends()
  const { groups, groupsLoading, groupsError } = useGetGroupsChats()

  if (usersAndProfileLoading) return 'Carregando...'
  if (usersAndProfileError)
    return 'Ocorreu um erro ao buscar os usuários da sua lista'

  if (groupsLoading) return 'Carregando...'
  if (groupsError) return 'Ocorreu um erro ao buscar os grupos da sua lista'

  return (
    <Flex vertical style={mainAsideContainer}>
      <Flex style={userChatContainerStyle} vertical align="center" gap={16}>
        {friendsList?.map((user) => {
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
                setRecipientGroup(null)
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

        {groups?.map((group) => {
          return (
            <Button
              shape="circle"
              key={group.grupo.id}
              style={avatarButtonStyle}
              onClick={() => {
                setRecipientGroup(group.grupo)
                setRecipient(null)
              }}
            >
              <Avatar
                style={{ backgroundColor: '#fff' }}
                src={group.grupo.foto}
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
        <img onClick={() => setOpenMain(!openMain)} src={whyAppLogo} alt="WhyApp Logo" height={24} width={24} />
      </Flex>
    </Flex>
  )
}
