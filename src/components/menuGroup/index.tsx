import { Button, Drawer, Flex } from 'antd'
import React, { useState } from 'react'
import './style.css'
import OpenMenu from './openMenu'
import HeaderMenu from './headermenu'
import OnlineConteiner from './OnlineConteiner'
import { Members } from '@/mocks/mockMemberGroup'
import Contact from './contact'
import OfflineConteiner from './OfflineConteiner'

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
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)

  const showDrawer = () => {
    setSettingsMenuOpen(true)
  }

  const onClose = () => {
    setSettingsMenuOpen(false)
  }
  return (
    <>
      <Button
        className="general-settings-button"
        style={settingsButtonStyle}
        shape="circle"
        icon={<OpenMenu />}
        type="primary"
        onClick={showDrawer}
      />
      <Drawer
        className="ant-drawer-body"
        placement="left"
        closable={false}
        onClose={onClose}
        open={settingsMenuOpen}
        getContainer={document.body}
        style={menuConteiner}
      >
        <HeaderMenu name="Carlin do grau CIA" />
        <Flex vertical style={{ marginTop: '60px' }}>
          <OnlineConteiner>
            {Members.filter((member) => member.status === true).map(
              (member, index) => (
                <Contact
                  key={index}
                  image={member.image}
                  name={member.name}
                  cargo={member.cargo}
                  status={member.status}
                />
              ),
            )}
            ,
          </OnlineConteiner>
          <OfflineConteiner>
            {Members.filter((member) => member.status === false).map(
              (member, index) => (
                <Contact
                  key={index}
                  image={member.image}
                  name={member.name}
                  cargo={member.cargo}
                  status={member.status}
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
