import { Button, Drawer, Flex } from 'antd'
import { useContext, useState } from 'react'
import { ChatContext } from '@/contexts/chatContext'
import ImageProfile from '../profile/imageProfile'
import NameProfile from './components/NameProfile'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  menuConteiner,
  settingsButtonStyle,
  stutusProfileStyle,
} from './style/style.tsx'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { SilenceNotifications } from './components/silenceNotification/index.tsx'
import { DescriptionUsers } from './components/DescriptionUser/index.tsx'
import { ButtonRemove } from './components/buttonremove/index.tsx'

const MenuInfo = () => {
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)
  const { currentUser } = useContext(ChatContext)

  const showDrawer = () => {
    setSettingsMenuOpen(true)
  }

  const onClose = () => {
    setSettingsMenuOpen(false)
  }
  return (
    <>
      <Button
        className="general-settings-button"
        style={settingsButtonStyle}
        type="primary"
        onClick={showDrawer}
      />
      <Drawer
        className="ant-drawer-body"
        placement="right"
        closable={false}
        onClose={onClose}
        open={settingsMenuOpen}
        getContainer={document.body}
        style={menuConteiner}
      >
        {currentUser && (
          <Flex vertical style={ConteinerMenuStyle}>
            <CloseCircleOutlined
              onClick={onClose}
              style={{
                color: 'white',
                position: 'fixed',
                top: '10px',
                left: '10px',
                fontSize: '1.5rem',
              }}
            />
            <Flex vertical style={ImageProfileStyle}>
              <ImageProfile
                image={currentUser.image}
                key={currentUser.userId}
                size="180px"
              />
              <Flex align="center" vertical>
                <NameProfile>{currentUser.username}</NameProfile>
                <div style={stutusProfileStyle}>
                  <UserOutlined style={{ color: 'white' }} />
                  <p style={{ color: 'white' }}>
                    {currentUser.chatPrivate ? 'online' : 'offline'}
                  </p>
                </div>
              </Flex>
            </Flex>
            <Flex
              vertical
              align="center"
              justify="space-between"
              style={{
                height: '320px',
              }}
            >
              <DescriptionUsers />
              <SilenceNotifications />
              <ButtonRemove />
            </Flex>
          </Flex>
        )}
      </Drawer>
    </>
  )
}
export default MenuInfo
