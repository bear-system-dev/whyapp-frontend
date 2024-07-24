import { Aside } from '@/components/Aside'
import { Chat } from '@/components/Chat'
import { ChatContainer } from '@/components/ChatContainer'
import { UploadFiles } from '@/components/FileUpload'
import HeaderChat from '@/components/Header'
import { InputBar } from '@/components/InputBar'
import MenuGroup from '@/components/MenuGroup'
import { Welcome } from '@/components/Welcome'
import styles from '@/pages/App/app.module.css'
import { useStateBackGround } from '@/reducer/context/background/backgroundContext'
import { useGetBackground } from '@/reducer/context/background/useGetBackground'
import { useStateRecipient } from '@/reducer/context/recipient/recipientContext'
import { useNotificationsSocket } from '@/utils/hooks/useNotificationsSocket'
import { MenuOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppLayout = () => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  const navigate = useNavigate()
  useNotificationsSocket()
  useGetBackground()

  if (!token || !userId) {
    navigate('/login')
  }

  const { color1, color2 } = useStateBackGround()
  const { recipient, recipientGroup } = useStateRecipient()
  const [openModal, setOpenModal] = useState(false)
  const [openMainAside, setOpenMainAside] = useState(true)
  const [showUpload, setShowUpload] = useState(false)
  return (
    <Flex
      className={
        recipient || recipientGroup
          ? styles.app__layout
          : styles.chat__welcomeMessageBackground
      }
    >
      {openMainAside && (
        <Aside
          openMainAside={openMainAside}
          setOpenMainAside={setOpenMainAside}
        />
      )}
      <MenuGroup />
      {recipient || recipientGroup ? (
        <Flex vertical style={{ height: '100dvh' }} flex={1}>
          <Flex vertical style={{ height: 60 }}>
            <HeaderChat
              openModal={openModal}
              setOpenModal={setOpenModal}
              setOpenMainAside={setOpenMainAside}
              openMainAside={openMainAside}
            />
          </Flex>
          <Flex
            flex={1}
            vertical
            align="center"
            className={styles.chat__background}
            style={{
              background: `linear-gradient(${color1}, ${
                color2 || 'transparent'
              })`,
            }}
          >
            <ChatContainer>
              <Chat />
            </ChatContainer>
          </Flex>
          {showUpload && <UploadFiles />}
          <Flex className={styles.chat__actionsInUserOrGroup}>
            <InputBar setShowUpload={setShowUpload} showUpload={showUpload} />
          </Flex>
        </Flex>
      ) : (
        <>
          {!openMainAside && (
            <>
              <MenuOutlined
                onClick={() => setOpenMainAside(!openMainAside)}
                style={{
                  color: 'white',
                  fontSize: '1.5rem',
                  position: 'fixed',
                  top: '0',
                  padding: '20px',
                  zIndex: 1000,
                  cursor: 'pointer',
                }}
              />
            </>
          )}
          <Welcome />
        </>
      )}
    </Flex>
  )
}
