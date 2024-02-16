import chatBackground from '@/assets/chatBackgroundRepeat.webp'
import { ChatContainer } from '@/components/ChatContainer'
import { InputBar } from '@/components/InputBar'
import { MainAside } from '@/components/MainAside'
import HeaderChat from '@/components/header'
import MenuGroup from '@/components/menuGroup'
import OpenMenu from '@/components/menuGroup/openMenu'
import { MockChats } from '@/mocks/chats-mocks'
<<<<<<< HEAD
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'

const headerStyle: React.CSSProperties = {
  maxHeight: '104px',
  height: '100%',
  margin: 0,
  padding: '0 4rem',
  backgroundColor: '#17212B',
  zIndex: 3,
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  maxHeight: 'calc(100%-184px)',
  lineHeight: '120px',
  color: '#fff',
  background: 'transparent',
  zIndex: 2,
}

const chatBackgroundStyle: React.CSSProperties = {
  background:
    'linear-gradient(180deg, rgba(79,147,249,1) 0%, rgba(226,66,249,0.5) 100%)',
  height: '100%',
  position: 'relative',
  width: '100%',
  zIndex: 1,
}
=======
import { Flex } from 'antd'
>>>>>>> 29ab1e5cea39bffe81fd2bd11b7f7fffc5e03d11

const chatDoodleBackgroundStyle: React.CSSProperties = {
  background: `url(${chatBackground}) center/cover`,
  backgroundSize: '100%',
  height: '100%',
  filter: 'brightness(0) opacity(0.1)',
  position: 'absolute',
  width: '100%',
  top: 0,
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#17212B',
<<<<<<< HEAD
  zIndex: 4,
=======
  zIndex: 3,
  width: 65,
>>>>>>> 29ab1e5cea39bffe81fd2bd11b7f7fffc5e03d11
}

const footerStyle: React.CSSProperties = {
  height: 60,
  padding: '0 1rem',
  margin: 0,
  backgroundColor: '#17212B',
}

const layoutStyle: React.CSSProperties = {
  borderRadius: 8,
  boxSizing: 'border-box',
  height: '100vh',
  maxHeight: '100vh',
  width: '100vw',
}

const asideGroup: React.CSSProperties = {
  zIndex: '3',
  position: 'static',
  left: '0',
  transition: 'left .5s ease',
}

const openAsideGroup: React.CSSProperties = {
  left: '0px',
}
const closeAsideGroup: React.CSSProperties = {
  position: 'absolute',
  left: '-380px',
}

export const AppLayout = () => {
  const [activeAside, setActiveAside] = useState(false)
  return (
    <Flex style={layoutStyle}>
      {/*  */}
      <Flex style={siderStyle}>
        <MainAside />
<<<<<<< HEAD
      </Sider>
      <Sider
        width={380}
        style={{
          background: 'transparent',
          ...asideGroup,
          ...(activeAside ? openAsideGroup : closeAsideGroup),
        }}
      >
        <MenuGroup activeMenu={activeAside} setActiveMenu={setActiveAside} />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <HeaderChat />
          {!activeAside && <OpenMenu setActiveMenu={setActiveAside} />}
        </Header>
        <Content style={contentStyle}>
=======
      </Flex>
      <Flex vertical flex={1}>
        <Flex vertical style={{ height: 60 }}>
          <HeaderChat />
        </Flex>
        <Flex
          flex={1}
          vertical
          align="center"
          style={{
            position: 'relative',
            background:
              'linear-gradient(rgb(87 132 199) 30%, rgb(162 77 175 / 50%) 100%)',
          }}
        >
>>>>>>> 29ab1e5cea39bffe81fd2bd11b7f7fffc5e03d11
          <ChatContainer>
            <MockChats />
          </ChatContainer>
          <div style={chatDoodleBackgroundStyle}></div>
        </Flex>
        <Flex style={footerStyle} vertical>
          <InputBar />
        </Flex>
      </Flex>
    </Flex>
  )
}
