import defaultAvatar from '@/assets/defaultAvatar.svg'
import ProfileImage from '@/components/Profile/ProfileImage'
import ProfileName from '@/components/Profile/ProfileName'
import { ChatContext } from '@/contexts/chatContext'
import { LeftOutlined, MenuOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { resetButtonStyles } from '../../mocks/mockUserArray'
import MenuInfo from '../MenuInfo'
import ContactGroup from './components/GroupsContacts'
import HeaderContainer from './components/HeaderContainer'
import StatusContact from './components/statusgroups'

interface HeaderProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  setOpenMainAside: React.Dispatch<React.SetStateAction<boolean>>
  openMainAside: boolean
}

const HeaderChat = ({
  setOpenModal,
  openModal,
  setOpenMainAside,
  openMainAside,
}: HeaderProps) => {
  const { recipient, recipientGroup, setRecipient, setRecipientGroup } =
    useContext(ChatContext)
  const [profileInfoMenuOpen, setprofileInfoMenuOpen] = useState(false)
  const onCloseMenu = () => {
    setprofileInfoMenuOpen(!profileInfoMenuOpen)
  }

  useEffect(() => {
    function onUsePressEscSetRecipientNull(event: KeyboardEvent) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setRecipient(null)
        setRecipientGroup(null)
      }
    }
    window.addEventListener('keydown', onUsePressEscSetRecipientNull)
    return () => {
      window.removeEventListener('keydown', onUsePressEscSetRecipientNull)
    }
  }, [setRecipient, setRecipientGroup])

  return (
    <HeaderContainer>
      <LeftOutlined
        style={{ color: '#FFFFFF' }}
        onClick={() => {
          setRecipient(null)
          setRecipientGroup(null)
        }}
      />
      {!openMainAside && (
        <MenuOutlined
          onClick={() => setOpenMainAside(!openMainAside)}
          style={{
            color: 'white',
            fontSize: '1.5rem',
          }}
        />
      )}

      <Flex
        align="center"
        style={{
          gap: '20px',
        }}
      >
        {recipient ? (
          <>
            <Button
              shape="circle"
              style={{
                ...resetButtonStyles,
                height: '45px',
                width: '45px',
              }}
              onClick={() => setprofileInfoMenuOpen(true)}
            >
              <ProfileImage
                size={'45px'}
                image={recipient?.avatar || defaultAvatar}
              />
            </Button>
            <div
              onClick={() => setprofileInfoMenuOpen(true)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={4}>
                <ProfileName name={recipient?.nome ?? 'Sem nome'} />
                <StatusContact />
              </Flex>
            </div>
          </>
        ) : recipientGroup ? (
          <>
            <Button
              shape="circle"
              style={{
                ...resetButtonStyles,
                height: '45px',
                width: '45px',
              }}
              onClick={() => setprofileInfoMenuOpen(true)}
            >
              <ProfileImage
                size={'45px'}
                image={recipientGroup?.foto || defaultAvatar}
              />
            </Button>
            <div
              onClick={() => setprofileInfoMenuOpen(true)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={5}>
                <ProfileName name={recipientGroup?.nome || 'Sem nome'} />
                <ContactGroup />
              </Flex>
            </div>
          </>
        ) : null}
      </Flex>

      <MenuInfo
        openModal={openModal}
        setOpenModal={setOpenModal}
        open={profileInfoMenuOpen}
        onClose={onCloseMenu}
        setprofileInfoMenuOpen={setprofileInfoMenuOpen}
      />
    </HeaderContainer>
  )
}
export default HeaderChat
