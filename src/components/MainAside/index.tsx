// import defaultAvatar from '@/assets/defaultAvatar.svg'
import whyAppLogo from '@/assets/whyAppLogo.png'
// import { users } from '@/mocks/mockUserArray'
import { ChatContext } from '@/contexts/chatContext'
import { chatData } from '@/mocks/chats-mocks'
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
  const { setCurrentUser } = useContext(ChatContext)

  return (
    <Flex vertical style={mainAsideContainer}>
      <Flex style={userChatContainerStyle} vertical align="center" gap={16}>
        {chatData.map((user) => {
          return (
            <Button
              shape="circle"
              key={user.userId}
              style={avatarButtonStyle}
              onClick={() => {
                setCurrentUser({
                  userId: user.userId,
                  username: user.username,
                  image: user.image,
                  chatPrivate: user.chatPrivate,
                  privateMessages: user.privateMessages,
                  groupMessages: user.groupMessages,
                })
              }}
            >
              <Avatar
                style={{ backgroundColor: '#fff' }}
                src={user.image}
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
