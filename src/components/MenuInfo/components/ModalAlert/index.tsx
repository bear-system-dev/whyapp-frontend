import { newChatButtonStyle } from '@/components/NewChat/components/FindUser'
import { UserCard } from '@/components/NewChat/components/UserCard'
import { User } from '@/model/UserModel'
import { useGetAllUsersList } from '@/utils/hooks/useGetAllUsersList'
import { useGetFriendsList } from '@/utils/hooks/useGetFriendsList'
import {
  CloseCircleOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons'
import { Button, Flex, Modal } from 'antd'
import Cookies from 'js-cookie'
import React, { useRef, useState } from 'react'
import { Tagmodal } from '../..'
import {
  containerButtonModal,
  headerModalStyle,
  inputStyle,
  modalContainerStyle,
  remModalButton,
  subtitleModalStyle,
  titleModalStyle,
  usersContainerStyle,
} from './style/style'
import './styles.css'
import { useStateRecipient } from '@/reducer/context/recipient/recipientContext'

export type FriendsPostProps = {
  adicionadoPor: string | undefined
  usuarioId: string
}

type ModalAlertProps = {
  title: string | undefined
  subtitle: string | undefined
  children: React.ReactNode
  setMembers: React.Dispatch<React.SetStateAction<FriendsPostProps[]>>
  members: FriendsPostProps[]
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  isModalOpen: boolean
  tagModal: Tagmodal | undefined
}

export const ModalAlert = ({
  title,
  subtitle,
  children,
  setMembers,
  isModalOpen,
  setIsModalOpen,
  tagModal,
}: ModalAlertProps) => {
  const { recipientGroup } = useStateRecipient()
  const userId = Cookies.get('userId')
  const { friendsList } = useGetFriendsList()
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
    setSelectedFriends((prevSelected) => ({
      ...prevSelected,
      [friend.id]: true,
    }))
  }

  const { users } = useGetAllUsersList()

  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })
  const handleCancel = () => {
    setIsModalOpen(false)
  }
  return (
    <>
      <Modal
        className="ant-modal-content"
        closable={false}
        getContainer={document.body}
        style={modalContainerStyle}
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Flex vertical align="center" style={modalContainerStyle}>
          <Flex vertical style={headerModalStyle}>
            <Flex justify="space-between">
              <Flex vertical>
                <p style={titleModalStyle}>{title}</p>
                <p style={subtitleModalStyle}>{subtitle}</p>
              </Flex>
              <CloseCircleOutlined
                onClick={() => setIsModalOpen(false)}
                style={{
                  fontSize: '1.5rem',
                  color: 'whitesmoke',
                  cursor: 'pointer',
                }}
              />
            </Flex>
            <input style={inputStyle} />
          </Flex>
          <Flex vertical style={usersContainerStyle}>
            {tagModal?.title === 'Adicionar membros'
              ? friendsList?.map(
                  (friend: User) =>
                    !groupUsers?.some((member) => member?.id === friend.id) && (
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
                    ),
                )
              : friendsList?.map(
                  (friend: User) =>
                    groupUsers?.some((member) => member?.id === friend.id) && (
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
                    ),
                )}
          </Flex>
          <Flex style={containerButtonModal} justify="space-around">
            <button className="remModalButton" style={remModalButton}>
              Cancelar
            </button>
            {children}
          </Flex>
        </Flex>
      </Modal>
    </>
  )
}
