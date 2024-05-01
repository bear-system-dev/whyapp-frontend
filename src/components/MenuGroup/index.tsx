import { ChatContext } from '@/contexts/chatContext'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { Button, Drawer, Flex } from 'antd'
import React, { useContext, useState } from 'react'
import OfflineConteiner from './OfflineConteiner'
import OnlineConteiner from './OnlineConteiner'
import Contact from './contact'
import HeaderMenu from './headermenu'
import OpenMenu from './openMenu'
import './style.css'

const menuConteiner: React.CSSProperties = {
  overflowY: 'scroll',
  backgroundColor: 'rgba(18, 29, 40, 0.9)',
  backdropFilter: 'blur(2px)',
  position: 'fixed',
  left: '66px',
  bottom: '0',
  width: '300px',
  zIndex: 1,
}

const settingsButtonStyle: React.CSSProperties = {
  background: 'transparent',
  position: 'fixed',
  left: '65px',
  top: '55px',
  zIndex: '999',
}

const MenuGroup = () => {
  const { recipientGroup } = useContext(ChatContext)
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)
  const { users } = useGetUsersAndFriends()

  const showDrawer = () => {
    setSettingsMenuOpen(true)
  }

  const onClose = () => {
    setSettingsMenuOpen(false)
  }

  const groupUsers = recipientGroup?.usuarios?.map((groupUser) => {
    return users?.find((user) => user.id === groupUser.usuarioId)
  })

  return (
    <>
      {recipientGroup !== null && (
        <Button
          className="general-settings-button"
          style={settingsButtonStyle}
          shape="circle"
          icon={<OpenMenu />}
          type="primary"
          onClick={showDrawer}
        />
      )}
      <Drawer
        className="ant-drawer-body"
        placement="left"
        closable={false}
        onClose={onClose}
        open={settingsMenuOpen}
        getContainer={document.body}
        style={menuConteiner}
      >
        <HeaderMenu name={recipientGroup?.nome ?? 'Sem Nome'} />
        <Flex vertical style={{ marginTop: '60px' }}>
          <OnlineConteiner>
            {/* {Members.filter((member) => member.status === true) */}
            {groupUsers?.map(
              (member) =>
                member && (
                  <Contact
                    key={member.id}
                    image={member.avatar}
                    name={member.nome}
                    cargo=""
                    status={true}
                  />
                ),
            )}
            ,
          </OnlineConteiner>
          <OfflineConteiner>
            {groupUsers?.map(
              // .filter((member) => member.status === false)

              (member) =>
                member && (
                  <Contact
                    key={member.id}
                    image={member.avatar}
                    name={member.nome}
                    cargo=""
                    status={false}
                  />
                ),
            )}
          </OfflineConteiner>
        </Flex>
      </Drawer>
    </>
  )
}
export default MenuGroup
