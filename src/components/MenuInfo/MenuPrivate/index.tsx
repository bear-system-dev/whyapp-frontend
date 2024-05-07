import ProfileImage from '@/components/Profile/ProfileImage'
import defaultAvatar from "@/assets/defaultAvatar.svg"
import { Recipient } from '@/model/RecipientModel'
import { Icon } from '@iconify/react'
import { UserOutlined } from '@ant-design/icons'
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

interface MenuInfoPrivateProps {
  recipient: Recipient
  onClose: () => void
}

export const MenuPrivateUSer = ({
  onClose,
  recipient,
}: MenuInfoPrivateProps) => {
  return (
    <Flex vertical style={containerMenuStyle}>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '12px',
          left: '12px',
          cursor: 'pointer',
          padding: '4px'
        }}>
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
          image={recipient.avatar || defaultAvatar}
          key={recipient.nome}
          size="150px"
        />
        <Flex align="center" vertical gap={8}>
          <ProfileName>{recipient.nome}</ProfileName>
          <div style={stutusProfileStyle}>
            <UserOutlined style={{ color: 'white' }} />
            <p style={{ color: 'white' }}>{recipient ? 'online' : 'offline'}</p>
          </div>
        </Flex>
      </Flex>
      <DescriptionUsers description={recipient.descricao} />
      <Flex
        vertical
        align="center"
        gap={0}
      >
        <SilenceNotifications />
        <ButtonRemove onClose={onClose} />
      </Flex>
    </Flex>
  )
}
