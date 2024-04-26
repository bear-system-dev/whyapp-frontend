import { Chat } from '@/components/Chat'
import { ChatContainer } from '@/components/ChatContainer'
import { InputBar } from '@/components/InputBar'
import { Aside } from '@/components/Aside'
import HeaderChat from '@/components/Header'
import MenuGroup from '@/components/MenuGroup'
import { Flex } from 'antd'
import Cookies from 'js-cookie'
import { useState } from 'react'
import styles from "@/pages/App/app.module.css";

export const AppLayout = () => {
  const token = Cookies.get('token')
  const userId = Cookies.get('userId')

  if (!token || !userId) {
    window.location.href = `${import.meta.env.VITE_APP_HOME_URL}/login`
  }

  const [openModal, setOpenModal] = useState(false)
  return (
    <Flex className={styles.app__layout}>
      <Aside />
      <MenuGroup />
      <Flex vertical flex={1}>
        <Flex vertical style={{ height: 60 }}>
          <HeaderChat openModal={openModal} setOpenModal={setOpenModal} />
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
