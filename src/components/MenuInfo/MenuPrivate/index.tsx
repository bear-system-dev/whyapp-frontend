import { Flex } from 'antd'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  stutusProfileStyle,
} from '../style/style'
import ProfileImage from '@/components/Profile/ProfileImage'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { DescriptionUsers } from '../components/DescriptionUser'
import NameProfile from '../components/NameProfile'
import { ButtonRemove } from '../components/buttonremove'
import { SilenceNotifications } from '../components/silenceNotification'
import { Recipient } from '@/model/RecipientModel'

interface MenuInfoPrivateProps {
  recipient: Recipient
  onClose: () => void
}

export const MenuPrivateUSer = ({
  onClose,
  recipient,
}: MenuInfoPrivateProps) => {
  return (
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
        <ProfileImage
          image={recipient.avatar}
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
