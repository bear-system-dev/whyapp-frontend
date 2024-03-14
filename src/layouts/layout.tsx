import chatBackground from '@/assets/chatBackgroundRepeat.webp'
import { Chat } from '@/components/Chat'
import { ChatContainer } from '@/components/ChatContainer'
import { InputBar } from '@/components/InputBar'
import { MainAside } from '@/components/MainAside'
import HeaderChat from '@/components/header'
import MenuGroup from '@/components/menuGroup'
import MenuInfo from '@/components/menuInfo'
import { Flex } from 'antd'
import React from 'react'

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
  zIndex: 4,
  width: 65,
  minWidth: 65,
}

const footerStyle: React.CSSProperties = {
  height: 60,
  padding: '0 1rem',
  margin: 0,
  backgroundColor: '#17212B',
}

const layoutStyle: React.CSSProperties = {
  zIndex: '3',
  borderRadius: 8,
  boxSizing: 'border-box',
  height: '100vh',
  maxHeight: '100vh',
  width: '100vw',
}

export const AppLayout = () => {
  return (
    <Flex style={layoutStyle}>
      {/*  */}
      <Flex style={siderStyle}>
        <MainAside />
      </Flex>
      <MenuGroup />
      <Flex vertical flex={1}>
        <Flex vertical style={{ height: 60 }}>
          <HeaderChat />
          <MenuInfo />
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
          <ChatContainer>
            <Chat />
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
