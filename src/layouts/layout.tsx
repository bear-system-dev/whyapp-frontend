import chatBackground from '@/assets/chatBackground.svg'
import { ChatContainer } from '@/components/ChatContainer'
import { InputBar } from '@/components/InputBar'
import { MainAside } from '@/components/MainAside'
import HeaderChat from '@/components/header'
import MenuGroup from '@/components/menuGroup'
import OpenMenu from '@/components/menuGroup/openMenu'
import { MockChats } from '@/mocks/chats-mocks'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import './index.css'

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

const chatDoodleBackgroundStyle: React.CSSProperties = {
  background: `url(${chatBackground}) center/cover`,
  backgroundSize: '50%',
  height: '100%',
  opacity: 0.2,
  position: 'fixed',
  width: '100%',
  zIndex: 2,
}

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#17212B',
  zIndex: 4,
}

const footerStyle: React.CSSProperties = {
  maxHeight: '80px',
  padding: '0 1rem',
  margin: 0,
  backgroundColor: '#17212B',
  zIndex: 3,
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
}

export const AppLayout = () => {
  const [activeAside, setActiveAside] = useState(true)

  return (
    <Layout style={layoutStyle}>
      <Sider width={96} style={siderStyle}>
        <MainAside />
      </Sider>
      {activeAside && (
        <Sider width={380} style={asideGroup}>
          <MenuGroup activeMenu={activeAside} setActiveMenu={setActiveAside} />
        </Sider>
      )}
      <Layout>
        <Header style={headerStyle}>
          <HeaderChat />
          {!activeAside && (
            <OpenMenu
              classname={`${activeAside ? 'open' : 'close'}`}
              activeMenu={activeAside}
              setActiveMenu={setActiveAside}
            />
          )}
        </Header>
        <Content style={contentStyle}>
          <ChatContainer>
            <MockChats />
          </ChatContainer>
          <div style={chatDoodleBackgroundStyle} />
          <div style={chatBackgroundStyle}></div>
        </Content>
        <Footer style={footerStyle}>
          <InputBar />
        </Footer>
      </Layout>
    </Layout>
  )
}
