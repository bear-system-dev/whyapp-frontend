import chatBackground from '@/assets/chatBackground.svg'
import { InputBar } from '@/components/InputBar'
import { MainAside } from '@/components/MainAside'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout'

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: '100%',
  maxHeight: 104,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'red',
}

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  maxHeight: 'calc(100%-184px)',
  lineHeight: '120px',
  color: '#fff',
  background: 'transparent',
  zIndex: 3,
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
  position: 'absolute',
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
  overflow: 'hidden',
  height: '98vh',
}

export const AppLayout = () => {
  return (
    <Layout style={layoutStyle}>
      <Sider width={96} style={siderStyle}>
        <MainAside />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <div style={chatDoodleBackgroundStyle} />
          <div style={chatBackgroundStyle} />
        </Content>
        <Footer style={footerStyle}>
          <InputBar />
        </Footer>
      </Layout>
    </Layout>
  )
}
