import { ChatContext } from '@/contexts/chatContext'
import {
  AddMemberMutation,
  RemMemberMutation,
} from '@/utils/hooks/useAddAndRemMemberGroup.ts'
import { Drawer, notification } from 'antd'
import React, { useContext, useEffect, useState } from 'react'
import { MenuPrivateUSer } from './MenuPrivate/index.tsx'
import { MenuInfoGroup } from './components/MenuGroup/index.tsx'
import { FriendsPostProps, ModalAlert } from './components/ModalAlert/index.tsx'
import { AddModalButton } from './components/ModalAlert/style/style.tsx'
import { menuConteiner } from './style/style.tsx'

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
  const openNotification = ({
    title,
    subtitle,
  }: {
    title: string
    subtitle: string
  }) => {
    notification.config({
      duration: 3,
    })
    notification.open({
      message: title,
      description: subtitle,
    })
  }

  useEffect(() => {
    if (addMemberMutation.isSuccess) {
      setIsModalOpen(!isModalOpen)
      openNotification({
        title: 'Adicionados',
        subtitle: 'Membros foram adicionados ao grupo',
      })
    }
    if (remMemberMutation.isSuccess) {
      setIsModalOpen(!isModalOpen)
      openNotification({
        title: 'Removidos',
        subtitle: 'Membros foram removidos do grupo',
      })
    }
  }, [addMemberMutation.isSuccess, remMemberMutation.isSuccess])

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

      {tagModal?.title === 'Adicionar membros' ? (
        <ModalAlert
          tagModal={tagModal}
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
          tagModal={tagModal}
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
