import {
  PlusOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons'
import { Button, Divider, Drawer, Flex } from 'antd'
import { useState } from 'react'
import { FindUser } from './components/FindUser'
import { GroupsList } from './components/GroupsList'
import styles from './newChat.module.css'

const newChatButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
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
        getContainer={document.getElementById('sidebar') || document.body}
        className={styles.chat__drawer}
      >
        <Flex vertical gap={24} className={styles.chat__drawerContainer}>
          <Flex align="center" justify="space-between">
            <h2 className={styles.chat__drawerTitle}>{session}</h2>
            <Flex gap={16} align="center" justify="center">
              <Button
                icon={<UserAddOutlined />}
                className={styles.chat__drawerAction}
                onClick={() => setSession('Nova conversa')}
              />
              <Divider type="vertical" className={styles.chat__drawerDivider} />
              <Button
                icon={<UsergroupAddOutlined />}
                className={styles.chat__drawerAction}
                onClick={() => setSession('Novo grupo')}
              />
            </Flex>
          </Flex>
          {session === 'Nova conversa' && <FindUser onClose={onClose} />}
          {session === 'Novo grupo' && <GroupsList onClose={onClose} />}
        </Flex>
      </Drawer>
    </>
  )
}
