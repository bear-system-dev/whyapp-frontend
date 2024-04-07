import { ChatContext } from '@/contexts/chatContext'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Drawer, Flex } from 'antd'
import { useContext } from 'react'
import ImageProfile from '../profile/imageProfile'
import { DescriptionUsers } from './components/DescriptionUser/index.tsx'
import NameProfile from './components/NameProfile'
import { ButtonRemove } from './components/buttonremove/index.tsx'
import { SilenceNotifications } from './components/silenceNotification/index.tsx'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  menuConteiner,
  stutusProfileStyle,
} from './style/style.tsx'
import { MenuInfoGroup } from './components/MenuGroup/index.tsx'

interface MenuInfoProps {
  open: boolean
  onClose: () => void
}

const MenuInfo = ({ open, onClose }: MenuInfoProps) => {
  const { recipient, recipientGroup } = useContext(ChatContext)

  return (
    <Drawer
      className="ant-drawer-body"
      placement="right"
      closable={false}
      onClose={onClose}
      open={open}
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
            <ButtonRemove onClose={onClose} />
          </Flex>
        </Flex>
      )}
      {recipientGroup && (
        <MenuInfoGroup onClose={onClose} recipientGroup={recipientGroup} />
      )}
      ,
    </Drawer>
  )
}
export default MenuInfo
