import defaultAvatar from '@/assets/defaultAvatar.svg'
import ProfileImage from '@/components/Profile/ProfileImage'
import { useRecipientOnlineStatus } from '@/utils/hooks/useRecipientOnlineStatus'
import { UserOutlined } from '@ant-design/icons'
import { Icon } from '@iconify/react'
import { Flex } from 'antd'
import { ButtonRemove } from '../components/ButtonRemove'
import { DescriptionUsers } from '../components/DescriptionUser'
import ProfileName from '../components/ProfileName'
import { SilenceNotifications } from '../components/SilenceNotification'
import {
  containerMenuStyle,
  imageProfileStyle,
  stutusProfileStyle,
} from '../styles/style'
import { useStateRecipient } from '@/reducer/context/recipient/recipientContext'

interface MenuInfoPrivateProps {
  onClose: () => void
}

export const MenuPrivateUSer = ({ onClose }: MenuInfoPrivateProps) => {
  const { recipient } = useStateRecipient()
  const { recipientOnlineStatus } = useRecipientOnlineStatus()

  return (
    <Flex vertical style={containerMenuStyle}>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '12px',
          left: '12px',
          cursor: 'pointer',
          padding: '4px',
        }}
      >
        <Icon
          icon="mdi:close"
          style={{
            display: 'block',
            color: '#fff',
            opacity: 0.5,
            fontSize: '1.25rem',
          }}
        />
      </div>
      <Flex vertical style={imageProfileStyle}>
        <ProfileImage
          image={recipient?.avatar || defaultAvatar}
          key={recipient?.nome}
          size="150px"
        />
        <Flex align="center" vertical gap={8}>
          <ProfileName>{recipient?.nome}</ProfileName>
          <div style={stutusProfileStyle}>
            <UserOutlined style={{ color: 'white' }} />
            <p style={{ color: 'white' }}>
              {recipientOnlineStatus ? 'online' : 'offline'}
            </p>
          </div>
        </Flex>
      </Flex>
      <DescriptionUsers description={recipient?.descricao} />
      <Flex vertical align="center" gap={0}>
        <SilenceNotifications />
        <ButtonRemove onClose={onClose} />
      </Flex>
    </Flex>
  )
}
