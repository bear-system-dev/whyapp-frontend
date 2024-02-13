// import defaultAvatar from '@/assets/defaultAvatar.svg'
import whyAppLogo from '@/assets/whyAppLogo.png'
// import { users } from '@/mocks/mockUserArray'
import { SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar, Button, Divider, Flex } from 'antd'
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
  margin: 0,
}

const searchButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
}

const settingsButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
}

export const MainAside = () => {
  const chats = Array.from({ length: 40 }, (_, index) => index)

  return (
    <Flex vertical style={mainAsideContainer}>
      <Flex style={userChatContainerStyle} vertical align="center" gap={8}>
        {chats.map((i: number) => {
          return (
            <Button
              shape="circle"
              key={i}
              style={avatarButtonStyle}
              onClick={() => console.log('Chat ' + i)}
            >
              <Avatar
                style={{ backgroundColor: '#fff' }}
                src={'https://api.dicebear.com/7.x/miniavs/svg?seed=' + i}
                size={50}
              />
            </Button>
          )
        })}
      </Flex>
      <Divider style={dividerStyle} />

      <Flex vertical flex={1} align="center" justify="end" gap={24}>
        <Button
          className="search-button"
          style={searchButtonStyle}
          shape="circle"
        >
          <SearchOutlined />
        </Button>

        <Button
          className="general-settings-button"
          style={settingsButtonStyle}
          shape="circle"
          icon={<SettingOutlined />}
        />
        <img src={whyAppLogo} alt="WhyApp Logo" height={24} width={24} />
      </Flex>
    </Flex>
  )
}
