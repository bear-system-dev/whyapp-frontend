import { ChatContext } from '@/contexts/chatContext'
import { Drawer } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { menuConteiner } from './style/style.tsx'
import { FriendsPostProps, ModalAlert } from './components/modalAlert/index.tsx'
import { AddModalButton } from './components/modalAlert/style/style.tsx'
import {
  AddMemberMutation,
  RemMemberMutation,
} from '@/utils/hooks/useAddAndRemMemberGroup.ts'
import { MenuInfoGroup } from './components/MenuGroup/index.tsx'
import { MenuPrivateUSer } from './MenuPrivate/index.tsx'

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
  open,
  onClose,
  setprofileInfoMenuOpen,
}: MenuInfoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { recipientGroup, recipient } = useContext(ChatContext)
  const [members, setMembers] = useState<FriendsPostProps[]>([])
  const [tagModal, setTagModal] = useState<Tagmodal>()
  const addMemberMutation = AddMemberMutation()
  const remMemberMutation = RemMemberMutation()
  useEffect(() => {
    let timeoutId: number

    if (addMemberMutation.isSuccess) {
      timeoutId = setTimeout(() => {
        setIsModalOpen(false)
      }, 3000)

      return () => clearTimeout(timeoutId)
    }
  }, [addMemberMutation.isSuccess, setIsModalOpen])

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
          <MenuPrivateUSer recipient={recipient} onClose={onClose} />
        )}
        {recipientGroup && (
          <MenuInfoGroup
            recipientGroup={recipientGroup}
            onClose={onClose}
            setOpenModal={setIsModalOpen}
            openModal={openModal}
            setTagModal={setTagModal}
            setprofileInfoMenuOpen={setprofileInfoMenuOpen}
            setIsModalOpen={setIsModalOpen}
          />
        )}
      </Drawer>

      {addMemberMutation.isSuccess && (
        <>
          <p
            style={{
              color: 'white',
              fontSize: '1.1rem',
              width: 'max-content',
              position: 'absolute',
              top: '70px',
              zIndex: 100,
              right: '10px',
              padding: '10px',
              backgroundColor: '#434455',
              borderRadius: '8px',
              fontWeight: '700',
            }}
          >
            Membros adicionados com sucesso
          </p>
        </>
      )}
      {remMemberMutation.isSuccess && (
        <>
          <p
            style={{
              color: 'white',
              fontSize: '1.1rem',
              width: 'max-content',
              position: 'absolute',
              top: '70px',
              zIndex: 100,
              right: '10px',
              padding: '10px',
              backgroundColor: '#434455',
              borderRadius: '8px',
              fontWeight: '700',
            }}
          >
            Membros removidos com sucesso
          </p>
        </>
      )}
      {tagModal?.title === 'Adicionar membros' ? (
        <ModalAlert
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          members={members}
          setMembers={setMembers}
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
