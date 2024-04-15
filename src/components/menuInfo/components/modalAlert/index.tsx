import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { Button, Flex, Modal } from 'antd'
import React, { useContext, useRef, useState } from 'react'
import './styles.css'
import {
  CloseCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { UserCard } from '@/components/NewChat/components/UserCard'
import {
  headerModalStyle,
  inputStyle,
  modalConteinerStyle,
  subtitleModalStyle,
  titleModalStyle,
  usersConteinerStyle,
  conteinerButtonModal,
  remModalButton,
} from './style/style'
import { User } from '@/model/UserModel'
import Cookies from 'js-cookie'
import { ChatContext } from '@/contexts/chatContext'
import { newChatButtonStyle } from '@/components/NewChat/components/FindUser'

export type FriendsPostProps = {
  adicionadoPor: string | undefined
  usuarioId: string
}

type ModalAlertProps = {
  title: string | undefined
  subtitle: string | undefined
  openModal: boolean
  children: React.ReactNode
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  setMembers: React.Dispatch<React.SetStateAction<FriendsPostProps[]>>
  members: FriendsPostProps[]
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean
}

export const ModalAlert = ({
  title,
  subtitle,
  openModal,
  setOpenModal,
  children,
  setMembers,
  members,
  isModalOpen,
  setIsModalOpen,
}: ModalAlertProps) => {
  const { recipientGroup } = useContext(ChatContext)
  const userId = Cookies.get('userId')
  const { friendsList } = useGetUsersAndFriends()
  const buttonRef = useRef(null)
  const [selectedFriends, setSelectedFriends] = useState<
    Record<string, boolean>
  >({})

  const targetFriend = (friend: User) => {
    const request: FriendsPostProps = {
      adicionadoPor: userId,
      usuarioId: friend.id,
    }
    setMembers((prevfriend) => [...prevfriend, request])
    console.log(members)
    setSelectedFriends((prevSelected) => ({
      ...prevSelected,
      [friend.id]: true,
    }))
  }

  const { users } = useGetUsersAndFriends()

  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      {openModal && (
        <Modal
          className="ant-modal-content"
          closable={false}
          getContainer={document.body}
          style={modalConteinerStyle}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <Flex vertical align="center" style={modalConteinerStyle}>
            <Flex vertical style={headerModalStyle}>
              <Flex justify="space-between">
                <Flex vertical>
                  <p style={titleModalStyle}>{title}</p>
                  <p style={subtitleModalStyle}>{subtitle}</p>
                </Flex>
                <CloseCircleOutlined
                  onClick={() => setOpenModal(false)}
                  style={{
                    fontSize: '1.5rem',
                    color: 'whitesmoke',
                    cursor: 'pointer',
                  }}
                />
              </Flex>
              <input style={inputStyle} />
            </Flex>
            <Flex vertical style={usersConteinerStyle}>
              {groupUsers &&
                friendsList?.map((friend) => (
                  <div key={friend.id} className="userCardStyle">
                    <UserCard
                      name={friend.nome}
                      image={friend.avatar}
                      onClick={() => console.log('clicado')}
                    />
                    {selectedFriends[friend.id] ? (
                      <Button
                        style={newChatButtonStyle}
                        className="newChatButtonStyle"
                        ref={buttonRef}
                        shape="circle"
                        icon={<MinusOutlined />}
                        typeof="primary"
                        onClick={() => targetFriend(friend)}
                      />
                    ) : (
                      <Button
                        style={newChatButtonStyle}
                        className="newChatButtonStyle"
                        shape="circle"
                        ref={buttonRef}
                        icon={<PlusOutlined />}
                        typeof="primary"
                        onClick={() => targetFriend(friend)}
                      />
                    )}
                  </div>
                ))}
            </Flex>
            <Flex style={conteinerButtonModal} justify="space-around">
              <button className="remModalButton" style={remModalButton}>
                Cancelar
              </button>
              {children}
            </Flex>
          </Flex>
        </Modal>
      )}
    </>
  )
}
