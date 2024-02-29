import { apiFunction } from '@/api/api'
import { User } from '@/model/UserModel'
import { EditOutlined, SaveOutlined, UserOutlined } from '@ant-design/icons'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Avatar, Button, Flex, Input, InputRef } from 'antd'
import TextArea, { TextAreaRef } from 'antd/es/input/TextArea'
import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import './styles.css'

const editButtonStyles: React.CSSProperties = {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
  cursor: 'pointer',
}

export const ProfileMenu = () => {
  const queryClient = useQueryClient()
  const { data, isLoading, isError } = useQuery<User, Error>({
    queryKey: ['my-profile-info'],
    queryFn: apiFunction.getMyProfileInfo,
  })

  const userProfileMutation = useMutation<User, Error, Partial<User>>({
    mutationFn: ({ avatar, nome, descricao }: Partial<User>) => {
      return apiFunction.updateMyProfileInfo({ avatar, nome, descricao })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-profile-info'] })
    },
  })

  // Edit Avatar Functions
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
          userProfileMutation.mutate({ avatar: avatarFileReader.result })
        }
      }
      avatarFileReader.readAsDataURL(avatarFile)
    }
  }

  // Edit Username Functions
  const [userName, setUserName] = useState(data?.nome || '')
  const [isEditingUserName, setIsEditingUsername] = useState(false)
  const userNameInputRef = useRef<InputRef | null>(null)

  const handleEditUserNameButtonClick = () => {
    setIsEditingUsername(true)
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
  const [userDescription, setUserDescription] = useState(data?.descricao || '')
  const [isEditingUserDescription, setIsEditingUserDescription] =
    useState(false)
  const descriptionTextAreaRef = useRef<TextAreaRef | null>(null)

  const handleEditUserDescriptionButtonClick = () => {
    setIsEditingUserDescription(true)
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
  useEffect(() => {
    if (data) {
      setUserName(data.nome)
      setUserDescription(data.descricao)
    }
  }, [data])

  const handleClickSaveEdit = () => {
    userProfileMutation.mutate({
      nome: userName,
      descricao: userDescription,
    })

    isEditingUserName && setIsEditingUsername(false)
    isEditingUserDescription && setIsEditingUserDescription(false)
  }

  if (isLoading) {
    return <div>carregando...</div>
  }

  if (isError) {
    return <div>Ops, algo saiu mal!</div>
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
            src={data?.avatar}
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
            type="type"
            autoFocus
            onKeyDown={handleUserNameInputKeyDown}
            readOnly={!isEditingUserName}
            ref={userNameInputRef}
          />

          <Button
            className="edit-button"
            style={editButtonStyles}
            icon={!isEditingUserName ? <EditOutlined /> : <SaveOutlined />}
            onClick={
              !isEditingUserName
                ? handleEditUserNameButtonClick
                : handleClickSaveEdit
            }
          />
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
              icon={
                !isEditingUserDescription ? <EditOutlined /> : <SaveOutlined />
              }
              onClick={
                !isEditingUserDescription
                  ? handleEditUserDescriptionButtonClick
                  : handleClickSaveEdit
              }
            />
          </Flex>

          <TextArea
            className="description-textarea"
            showCount
            maxLength={120}
            readOnly={!isEditingUserDescription}
            value={userDescription}
            style={{
              resize: 'none',
            }}
            placeholder="Conte sobre você!"
            ref={descriptionTextAreaRef}
            autoFocus
            onChange={handleUserDescriptionTextAreaChange}
            onKeyDown={handleUserDescriptionTextAreaKeyDown}
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
