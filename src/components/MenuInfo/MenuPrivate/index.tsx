import ProfileImage from '@/components/Profile/ProfileImage'
import defaultAvatar from "@/assets/defaultAvatar.svg"
import { Recipient } from '@/model/RecipientModel'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { ButtonRemove } from '../components/ButtonRemove'
import { DescriptionUsers } from '../components/DescriptionUser'
import NameProfile from '../components/NameProfile'
import { SilenceNotifications } from '../components/SilenceNotification'
import {
  ContainerMenuStyle,
  ImageProfileStyle,
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
    <Flex vertical style={ContainerMenuStyle}>
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
        <ProfileImage
          image={recipient.avatar || defaultAvatar}
          key={recipient.nome}
          size="180px"
        />
        <Flex align="center" vertical>
          <NameProfile>{recipient.nome}</NameProfile>
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
        justify="space-between"
        style={{
          position: 'fixed',
          bottom: '10px',
          height: 'fit-content',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          padding: '0 18px',
        }}
      >
        <SilenceNotifications />
        <ButtonRemove onClose={onClose} />
      </Flex>
    </Flex>
  )
}
