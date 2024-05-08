import ImageProfile from '@/components/profile/imageProfile'
import NameProfile from '@/components/profile/nameprofile'
import { ChatContext } from '@/contexts/chatContext'
import { Button, Flex } from 'antd'
import { useContext, useState } from 'react'
import MenuInfo from '../menuInfo'
import { resetButtonStyles } from './../../mocks/mockUserArray'
import ContactGroup from './components/contactsgroups'
import HeaderContainer from './components/headerConteiner'
import StatusContact from './components/statusgroups'
import { MenuOutlined } from '@ant-design/icons'

interface HeaderProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  openModal: boolean
  setOpenMain: React.Dispatch<React.SetStateAction<boolean>>
  openMain: boolean
}

const HeaderChat = ({ setOpenModal, openModal, setOpenMain, openMain }: HeaderProps) => {
  const { recipient, recipientGroup } = useContext(ChatContext)
  const [profileInfoMenuOpen, setprofileInfoMenuOpen] = useState(false)
  const onCloseMenu = () => {
    setprofileInfoMenuOpen(!profileInfoMenuOpen)
  }
  return (
    <HeaderContainer>
        {
          !openMain && (
            <MenuOutlined
            onClick={() => setOpenMain(!openMain)}
            style={{
              color: 'white',
              fontSize: '28px',
            }} />
          )
        }

      <Flex
        align="center"
        style={{
          backgroundColor: 'transparent',
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
              <ImageProfile size={'45px'} image={recipient?.avatar}  />
            </Button>
            <div
              onClick={() => setprofileInfoMenuOpen(true)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={5}>
                <NameProfile user={recipient?.nome} colortext="#FFFFFF" />
                <StatusContact status="online" />
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
              <ImageProfile size={'45px'} image={recipientGroup?.foto} />
            </Button>
            <div
              onClick={() => setprofileInfoMenuOpen(true)}
              style={{ cursor: 'pointer', userSelect: 'none' }}
            >
              <Flex vertical gap={5}>
                <NameProfile user={recipientGroup?.nome} colortext="#FFFFFF" />
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
