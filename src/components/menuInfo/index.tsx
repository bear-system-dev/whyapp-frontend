import { ChatContext } from '@/contexts/chatContext'
import { CloseCircleOutlined, UserOutlined } from '@ant-design/icons'
import { Drawer, Flex } from 'antd'
import { useContext, useState } from 'react'
import ImageProfile from '../profile/imageProfile'
import { DescriptionUsers } from './components/DescriptionUser/index.tsx'
import NameProfile from './components/NameProfile'
import { ButtonRemove } from './components/buttonremove/index.tsx'
import { SilenceNotifications } from './components/silenceNotification/index.tsx'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  LabelStyle,
  menuConteiner,
  stutusProfileStyle,
} from './style/style.tsx'
import { FriendsPostProps, ModalAlert } from './components/modalAlert/index.tsx'
import { ButtonRemoveMember } from './components/ButtonRemoveMember/index.tsx'
import { ButtonAddMember } from './components/ButtonAddMember/index.tsx'
import { ButtonDeleteGroup } from './components/ButtonDeleteGroup/index.tsx'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends.ts'
import Contact from '../menuGroup/contact/index.tsx'
import { AddModalButton } from './components/modalAlert/style/style.tsx'
import {
  AddMemberMutation,
  RemMemberMutation,
} from '@/utils/hooks/useAddAndRemMemberGroup.ts'

interface MenuInfoProps {
  open: boolean
  onClose: () => void
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  setprofileInfoMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface Tagmodal {
  title: string
  subtitle: string
}

const MenuInfo = ({
  openModal,
  setOpenModal,
  open,
  onClose,
  setprofileInfoMenuOpen,
}: MenuInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { recipientGroup, recipient } = useContext(ChatContext)
  const [members, setMembers] = useState<FriendsPostProps[]>([])
  const [tagModal, setTagModal] = useState<Tagmodal>()
  const { users } = useGetUsersAndFriends()
  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })
  const addMemberMutation = AddMemberMutation()
  const remMemberMutation = RemMemberMutation()

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
    <>
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
                key={recipient.nome}
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
        )}
        {recipientGroup && (
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
            <Flex
              vertical
              justify="center"
              align="center"
              style={{ gap: '30px' }}
            >
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
        )}
      </Drawer>
      {tagModal?.title === 'Adicionar membros' ? (
        <ModalAlert
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          members={members}
          setMembers={setMembers}
          openModal={openModal}
          setOpenModal={setOpenModal}
          subtitle={tagModal?.subtitle}
          title={tagModal?.title}
        >
          <button
            onClick={() =>
              addMemberMutation.mutate({
                groupId: recipientGroup?.id,
                members,
              })
            }
            className="addModalButton"
            style={AddModalButton}
          >
            Adicionar
          </button>
        </ModalAlert>
      ) : (
        <ModalAlert
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          members={members}
          setMembers={setMembers}
          openModal={openModal}
          setOpenModal={setOpenModal}
          subtitle={tagModal?.subtitle}
          title={tagModal?.title}
        >
          <button
            onClick={() => {
              remMemberMutation.mutate({
                groupId: recipientGroup?.id,
                members,
              })
            }}
            className="addModalButton"
            style={AddModalButton}
          >
            Remover
          </button>
        </ModalAlert>
      )}
    </>
  )
}
export default MenuInfo
