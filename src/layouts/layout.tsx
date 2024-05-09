import { Aside } from '@/components/Aside'
import { Chat } from '@/components/Chat'
import { ChatContainer } from '@/components/ChatContainer'
import HeaderChat from '@/components/Header'
import { InputBar } from '@/components/InputBar'
import MenuGroup from '@/components/MenuGroup'
import styles from '@/pages/App/app.module.css'
import { Flex } from 'antd'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AppLayout = () => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')
  const navigate = useNavigate()

  if (!token || !userId) {
    navigate('/login')
  }

  const [openModal, setOpenModal] = useState(false)
  const [openMainAside, setOpenMainAside] = useState(true)
  return (
    <Flex className={styles.app__layout}>
      {
        openMainAside && (
          <Aside openMainAside={openMainAside} setOpenMainAside={setOpenMainAside}/>
        )
      }
      <MenuGroup />
      <Flex vertical flex={1}>
        <Flex vertical style={{ height: 60 }}>
          <HeaderChat openMainAside={openMainAside} setOpenMainAside={setOpenMainAside}  openModal={openModal} setOpenModal={setOpenModal} />
        </Flex>
        <Flex
          flex={1}
          vertical
          align="center"
          className={styles.chat__background}
        >
          <ChatContainer>
            <Chat />
          </ChatContainer>
        </Flex>
        <Flex className={styles.chat__actionsInUserOrGroup}>
          <InputBar />
        </Flex>
      </Flex>
    </Flex>
  )
}
