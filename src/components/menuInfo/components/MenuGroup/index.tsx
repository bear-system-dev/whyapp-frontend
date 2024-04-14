import ImageProfile from '@/components/profile/imageProfile'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  LabelStyle,
  stutusProfileStyle,
} from '../../style/style'
import { DescriptionUsers } from '../DescriptionUser'
import NameProfile from '../NameProfile'
import { SilenceNotifications } from '../silenceNotification'
import { RecipientGroup } from '@/model/RecipientModel'
import { ButtonAddMember } from '../ButtonAddMember'
import { ButtonRemoveMember } from '../ButtonRemoveMember'
import { ButtonDeleteGroup } from '../ButtonDeleteGroup'
import Contact from '@/components/menuGroup/contact'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { Tagmodal } from '@/layouts/layout'
import { ModalAlert } from '../modalAlert'

interface MenuInfoGroupProps {
  recipientGroup: RecipientGroup
  onClose: () => void
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  setTagmodal: React.Dispatch<React.SetStateAction<Tagmodal | undefined>>
}

export const MenuInfoGroup = ({
  onClose,
  recipientGroup,
  setOpenModal,
  openModal,
  setTagmodal,
}: MenuInfoGroupProps) => {
  const { users } = useGetUsersAndFriends()
  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })
  const handleClick = () => {
    setTagmodal({
      title: 'Adicionar membros',
      subtitle: 'Adicione novos membros no grupo para interagir',
    })
    setOpenModal(true)
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
        <ImageProfile
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
        <DescriptionUsers />
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
          openmodal={openModal}
          tagButton="Adicionar membros"
          onClick={handleClick}
        />
        <ButtonRemoveMember
          setTagmodal={setTagmodal}
          setOpenModal={setOpenModal}
          tagButton="Remover membros"
        />
        <ButtonDeleteGroup />
      </Flex>
    </Flex>
  )
}
