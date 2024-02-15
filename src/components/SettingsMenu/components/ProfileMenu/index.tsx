import { EditOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Flex, Input, InputRef } from 'antd'
import TextArea, { TextAreaRef } from 'antd/es/input/TextArea'
import React, { ChangeEvent, KeyboardEvent, useRef, useState } from 'react'
import './styles.css'

interface AvatarProps {
  avatar: string
}

const editButtonStyles: React.CSSProperties = {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  cursor: 'pointer',
}

// Initial field values
const userAvatar: AvatarProps = { avatar: '' }
const initialUserName = 'Andréia Amâncio'
const initialUserDescription = ''

export const ProfileMenu = () => {
  // Edit Avatar Functions
  const [avatar, setAvatar] = useState(userAvatar.avatar)
  const avatarFileInputRef = useRef<HTMLInputElement>(null)

  const handleAvatarFileChangeClick = () => {
    avatarFileInputRef.current?.click()
  }

  const handleAvatarFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const avatarFile = event.target.files && event.target.files[0]
    if (avatarFile) {
      const avatarFileReader = new FileReader()
      avatarFileReader.onloadend = () => {
        if (typeof avatarFileReader.result === 'string') {
          setAvatar(avatarFileReader.result)
        }
      }
      avatarFileReader.readAsDataURL(avatarFile)
    }
  }

  // Edit Username Functions
  const [userName, setUserName] = useState(initialUserName)
  const [isEditing, setIsEditing] = useState(false)
  const userNameInputRef = useRef<InputRef | null>(null)

  const handleEditUserNameButtonClick = () => {
    setIsEditing(true)
    userNameInputRef.current?.focus()
  }

  const handleUserNameInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const handleUserNameInputKeyDown = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === 'Enter' && userNameInputRef) {
      userNameInputRef.current?.blur()
    }
  }

  // Edit Description Functions
  const [userDescription, setUserDescription] = useState(initialUserDescription)
  const descriptionTextAreaRef = useRef<TextAreaRef | null>(null)

  const handleEditUserDescriptionButtonClick = () => {
    setIsEditing(true)
    descriptionTextAreaRef.current?.focus()
  }

  const handleUserDescriptionTextAreaChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setUserDescription(event.target.value)
  }

  const handleUserDescriptionTextAreaKeyDown = (
    event: KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    if (event.key === 'Enter' && descriptionTextAreaRef) {
      descriptionTextAreaRef.current?.blur()
    }
  }

  // General Edit Fields functions
  const handleOnEditBlur = () => {
    setIsEditing(false)
  }

  return (
    <Flex vertical align="center" gap={8}>
      <h2 style={{ alignSelf: 'start', fontSize: '1rem' }}>Perfil</h2>
      <Flex vertical align="center" gap={24} style={{ width: '100%' }}>
        <div
          className="edit-user-avatar-container"
          onClick={handleAvatarFileChangeClick}
        >
          <Avatar
            size={80}
            src={avatar}
            icon={<UserOutlined />}
            className="edit-user-avatar"
          />
          <EditOutlined className="edit-user-avatar-icon" />
        </div>
        <input
          type="file"
          style={{ display: 'none' }}
          ref={avatarFileInputRef}
          onChange={handleAvatarFileChange}
        />
        <Flex
          style={{ width: '100%' }}
          className="input-container"
          align="center"
          justify="center"
        >
          <Input
            value={userName}
            className="user-name-edit-input"
            onChange={handleUserNameInputChange}
            onBlur={handleOnEditBlur}
            type="type"
            autoFocus
            onKeyDown={handleUserNameInputKeyDown}
            readOnly={!isEditing}
            ref={userNameInputRef}
          />
          {!isEditing && (
            <Button
              className="edit-button"
              style={editButtonStyles}
              icon={<EditOutlined />}
              onClick={handleEditUserNameButtonClick}
            />
          )}
        </Flex>
        <Flex
          vertical
          className="input-container"
          style={{ width: '100%' }}
          gap={8}
        >
          <Flex
            style={{ paddingLeft: '0.5rem', width: '100%' }}
            align="center"
            justify="space-between"
          >
            <span style={{ fontSize: '0.875rem' }}>Sobre</span>
            <Button
              className="edit-button"
              style={editButtonStyles}
              icon={<EditOutlined />}
              onClick={handleEditUserDescriptionButtonClick}
            />
          </Flex>

          <TextArea
            className="description-textarea"
            showCount
            maxLength={120}
            readOnly={!isEditing}
            value={userDescription}
            style={{
              resize: 'none',
            }}
            placeholder="Conte sobre você!"
            ref={descriptionTextAreaRef}
            autoFocus
            onChange={handleUserDescriptionTextAreaChange}
            onBlur={handleOnEditBlur}
            onKeyDown={handleUserDescriptionTextAreaKeyDown}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
