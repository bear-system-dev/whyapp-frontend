import {
  PlusOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Flex } from 'antd'
import { useState } from 'react'
import { FindUser } from './components/FindUser'
import { CreateNewGroupButton } from './components/NewGroup'

const newChatButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
}

const drawerStyles: React.CSSProperties = {
  background: '#1E2C39',
  borderRadius: '0 8px 8px 0',
  position: 'absolute',
  bottom: 60,
  left: 64,
  height: 'calc(100vh - 120px)',
  width: '320px',
}

const controlButtonStyles: React.CSSProperties = {
  all: 'unset',
  color: '#FFFFFF',
  cursor: 'pointer',
  fontSize: '1.5rem',
}

const dividerStyles: React.CSSProperties = {
  background: '#FFFFFF',
  height: '2rem',
  margin: 0,
}

export const NewChat = () => {
  const [session, setSession] = useState('Nova conversa')
  const [newChatDrawerOpen, setNewChatDrawerOpen] = useState(false)

  const showDrawer = () => {
    setNewChatDrawerOpen(true)
  }

  const onClose = () => {
    setNewChatDrawerOpen(false)
  }
  return (
    <>
      <Button
        className="search-button"
        style={newChatButtonStyle}
        shape="circle"
        icon={<PlusOutlined />}
        typeof="primary"
        onClick={showDrawer}
      />
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        open={newChatDrawerOpen}
        getContainer={document.body}
        style={drawerStyles}
      >
        <Flex
          vertical
          gap={24}
          style={{ color: '#FFFFFF', height: '100%', padding: '2rem 1rem' }}
        >
          <Flex align="center" justify="space-between">
            <h2 style={{ fontSize: '1.5rem' }}>{session}</h2>
            <Flex gap={16} align="end" justify="center">
              <Button
                icon={<UserAddOutlined style={{ fontSize: '1.25rem' }} />}
                style={controlButtonStyles}
                onClick={() => setSession('Nova conversa')}
              />
              <Divider type="vertical" style={dividerStyles} />
              <Button
                icon={<UsergroupAddOutlined style={{ fontSize: '1.25rem' }} />}
                style={controlButtonStyles}
                onClick={() => setSession('Novo grupo')}
              />
            </Flex>
          </Flex>
          <FindUser />
          {session === 'Novo grupo' && <CreateNewGroupButton />}
        </Flex>
      </Drawer>
    </>
  )
}
