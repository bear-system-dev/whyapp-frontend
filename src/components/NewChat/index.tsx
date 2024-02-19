import {
  PlusOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Flex, Input } from 'antd'
import { useState } from 'react'

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

const searchInputBarStyles: React.CSSProperties = {
  background:
    'linear-gradient(to bottom right, #C9C9C94D, #C4C4C41A) padding-box, linear-gradient(to bottom left, #FFFFFF4D, #D3D3D31A) border-box',
  color: '#FFFFFF',
  display: 'flex',
  padding: '0 1rem',
  boxSizing: 'border-box',
  height: '24px',
  width: '100%',
  gap: '20px',
  alignItems: 'center',
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
            <h2 style={{ fontSize: '1.5rem' }}>Novo chat</h2>
            <Flex gap={16} align="end" justify="center">
              <Button
                icon={<UserAddOutlined style={{ fontSize: '1.25rem' }} />}
                style={controlButtonStyles}
              />
              <Divider type="vertical" style={dividerStyles} />
              <Button
                icon={<UsergroupAddOutlined style={{ fontSize: '1.25rem' }} />}
                style={controlButtonStyles}
              />
            </Flex>
          </Flex>
          <Input className="searchInputBar" style={searchInputBarStyles} />
        </Flex>
      </Drawer>
    </>
  )
}
