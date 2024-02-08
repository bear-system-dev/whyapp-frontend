import defaultAvatar from '@/assets/defaultAvatar.svg'
import whyAppLogo from '@/assets/whyAppLogo.png'
import { SearchOutlined, SettingOutlined } from '@ant-design/icons'
import { Button, Divider, Flex } from 'antd'
import { users } from './mockUserArray'
import './styles.css'

const mainAsideContainer: React.CSSProperties = {
  background: 'linear-gradient(to bottom right, #00000040, #C4C4C41A)',
  height: '100%',
  padding: '1.5rem 0 1.5rem',
}

const avatarButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  padding: '0',
  height: 'auto',
  width: '100%',
}

const userChatContainerStyle: React.CSSProperties = {
  maxHeight: '70vh',
  overflowY: 'auto',
  scrollbarGutter: 'stable',
  width: '100%',
}

const dividerStyle: React.CSSProperties = {
  background: '#FFFFFFBF',
}

const searchButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
  height: 'auto',
  width: '100%',
}

const settingsButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
  height: 'auto',
  width: '100%',
}

export const MainAside = () => {
  return (
    <Flex vertical style={mainAsideContainer}>
      <Flex style={userChatContainerStyle} vertical align="center" gap={16}>
        {users.map((user: number) => {
          return (
            <Button
              shape="circle"
              key={user}
              icon={
                <img
                  src={defaultAvatar}
                  alt="user avatar"
                  height={60}
                  width={60}
                />
              }
              style={avatarButtonStyle}
            />
          )
        })}
      </Flex>
      <Divider style={dividerStyle} />

      <Flex vertical flex={1} align="center" justify="end" gap={24}>
        <Button
          className="search-button"
          style={searchButtonStyle}
          shape="circle"
          icon={<SearchOutlined />}
        />

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
