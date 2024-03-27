import { ChatContext } from '@/contexts/chatContext'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Drawer, Flex } from 'antd'
import { useContext, useState } from 'react'
import ImageProfile from '../profile/imageProfile'
import { DescriptionUsers } from './components/DescriptionUser/index.tsx'
import NameProfile from './components/NameProfile'
import { ButtonRemove } from './components/buttonremove/index.tsx'
import { SilenceNotifications } from './components/silenceNotification/index.tsx'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  menuConteiner,
  settingsButtonStyle,
  stutusProfileStyle,
} from './style/style.tsx'

const MenuInfo = () => {
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)
  const { recipient } = useContext(ChatContext)

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
        {recipient && (
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
                image={recipient.avatar}
                key={recipient.id}
                size="180px"
              />
              <Flex align="center" vertical>
                <NameProfile>{recipient.nome}</NameProfile>
                <div style={stutusProfileStyle}>
                  <UserOutlined style={{ color: 'white' }} />
                  <p style={{ color: 'white' }}>
                    {recipient ? 'online' : 'offline'}
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
