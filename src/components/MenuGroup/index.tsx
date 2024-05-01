import { ChatContext } from '@/contexts/chatContext'
import { useGetUsersAndFriends } from '@/utils/hooks/useGetUsersAndFriends'
import { Button, Drawer, Flex } from 'antd'
import { useContext, useState } from 'react'
import Contact from './Contact'
import HeaderMenu from './HeaderMenu'
import OfflineContainer from './OfflineContainer'
import OnlineContainer from './OnlineContainer'
import OpenMenu from './OpenMenu'
import { MenuContainer, SettingsButtonStyle } from './style'
import './style.css'

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
          style={SettingsButtonStyle}
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
        style={MenuContainer}
      >
        <HeaderMenu name={recipientGroup?.nome ?? 'Sem Nome'} />
        <Flex vertical style={{ marginTop: '60px' }}>
          <OnlineContainer>
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
          </OnlineContainer>
          <OfflineContainer>
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
          </OfflineContainer>
        </Flex>
      </Drawer>
    </>
  )
}
export default MenuGroup
