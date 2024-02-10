import chatBackground from '@/assets/chatBackground.svg'
import { InputBar } from '@/components/InputBar'
import { MainAside } from '@/components/MainAside'
import HeaderChat from '@/components/header'
import { ChatContainer } from '@/mocks/chats-mocks'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'

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
  zIndex: 3,
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
  height: '100vh',
  width: '100vw',
}

export const AppLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width={96} style={siderStyle}>
        <MainAside />
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <HeaderChat />
        </Header>
        <Content style={contentStyle}>
          <ChatContainer />
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
