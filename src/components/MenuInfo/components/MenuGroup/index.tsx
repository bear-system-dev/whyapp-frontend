import Contact from '@/components/MenuGroup/contact'
import ProfileImage from '@/components/Profile/ProfileImage'
import { RecipientGroup } from '@/model/RecipientModel'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import { Tagmodal } from '../..'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  LabelStyle,
  stutusProfileStyle,
} from '../../style/style'
import { ButtonAddMember } from '../ButtonAddMember'
import { ButtonDeleteGroup } from '../ButtonDeleteGroup'
import { ButtonRemoveMember } from '../ButtonRemoveMember'
import { DescriptionUsers } from '../DescriptionUser'
import NameProfile from '../NameProfile'
import { SilenceNotifications } from '../silenceNotification'
interface MenuInfoGroupProps {
  recipientGroup: RecipientGroup
  onClose: () => void
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  setTagModal: React.Dispatch<React.SetStateAction<Tagmodal | undefined>>
  setprofileInfoMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuInfoGroup = ({
  onClose,
  recipientGroup,
  setOpenModal,
  setTagModal,
  setprofileInfoMenuOpen,
  setIsModalOpen,
}: MenuInfoGroupProps) => {
  const { users } = useGetUsersAndFriends()
  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })
  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleremClick = () => {
    setTagModal({
      title: 'Remover membros',
      subtitle: 'Remova membros do grupos',
    })
    setOpenModal(true)
    setprofileInfoMenuOpen(false)
    showModal()
  }

  const handleAddClick = () => {
    setTagModal({
      title: 'Adicionar membros',
      subtitle: 'Adicione novos membros no grupo para interagir',
    })
    setOpenModal(true)
    setprofileInfoMenuOpen(false)
    showModal()
  }

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
          image={recipientGroup.foto}
          key={recipientGroup.id}
          size="180px"
        />
        <Flex align="center" vertical>
          <NameProfile>{recipientGroup.nome}</NameProfile>
          <div style={stutusProfileStyle}>
            <UserOutlined style={{ color: 'white' }} />
            <p style={{ color: 'white' }}>
              Membros: {recipientGroup.usuarios?.length}
            </p>
          </div>
        </Flex>
      </Flex>
      <Flex vertical justify="center" align="center" style={{ gap: '30px' }}>
        <DescriptionUsers description={recipientGroup?.descricao} />
        <Flex
          vertical
          style={{
            width: '100%',
            padding: '0 10px',
          }}
        >
          <div
            style={{
              width: '90%',
              textAlign: 'start',
            }}
          >
            <p style={LabelStyle}>Membros</p>
          </div>
          {groupUsers?.map(
            (member) =>
              member && (
                <Contact
                  key={member.id}
                  image={member.avatar}
                  name={member.nome}
                  cargo=""
                  status={true}
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex
        vertical
        align="center"
        justify="center"
        style={{
          height: 'fit-content',
          alignItems: 'center',
          gap: '8px',
          width: '100%',
          padding: '0 18px',
        }}
      >
        <SilenceNotifications />
        <ButtonAddMember
          onClick={handleAddClick}
          tagButton="Adicionar membros"
        />
        <ButtonRemoveMember
          onClick={handleremClick}
          tagButton="Remover membros"
        />
        <ButtonDeleteGroup />
      </Flex>
    </Flex>
  )
}
