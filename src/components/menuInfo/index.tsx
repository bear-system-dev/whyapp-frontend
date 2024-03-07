import { Button, Drawer, Flex } from 'antd'
import { useContext, useState } from 'react'
import { ChatContext } from '@/contexts/chatContext'
import ImageProfile from '../profile/imageProfile'
import NameProfile from './components/NameProfile'
import {
  ConteinerMenuStyle,
  ImageProfileStyle,
  LabelStyle,
  RadioListStyle,
  SilenceNotificationsStyle,
  buttonRemoveStyle,
  conteinerList,
  descriptionStyle,
  menuConteiner,
  menuSilenceStyle,
  settingsButtonStyle,
  stutusProfileStyle,
  textToggle,
} from './style/style.tsx'
import {
  DownOutlined,
  UserDeleteOutlined,
  UserOutlined,
} from '@ant-design/icons'

const MenuInfo = () => {
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)
  const [openSilence, setOpenSilence] = useState(false)
  const { currentUser } = useContext(ChatContext)

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
        type="primary"
        onClick={showDrawer}
      />
      <Drawer
        className="ant-drawer-body"
        placement="right"
        closable={false}
        onClose={onClose}
        open={settingsMenuOpen}
        getContainer={document.body}
        style={menuConteiner}
      >
        {currentUser && (
          <Flex vertical style={ConteinerMenuStyle}>
            <Flex vertical style={ImageProfileStyle}>
              <ImageProfile
                image={currentUser.image}
                key={currentUser.userId}
                size="180px"
              />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                }}
              >
                <NameProfile>{currentUser.username}</NameProfile>
                <div style={stutusProfileStyle}>
                  <UserOutlined style={{ color: 'white' }} />
                  <p style={{ color: 'white' }}>
                    {currentUser.chatPrivate ? 'online' : 'offline'}
                  </p>
                </div>
              </div>
            </Flex>
            <div
              style={{
                height: '320px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <div>
                <p style={LabelStyle}>Descrição</p>
                <p style={descriptionStyle}>
                  Tá pegando fogo bixo, manda pix ai rapidao pra eu testar um
                  negócio aqui ...
                </p>
              </div>
              <div style={SilenceNotificationsStyle}>
                <div style={menuSilenceStyle}>
                  <p style={textToggle}>Silenciar notificações</p>
                  <DownOutlined
                    style={{ color: 'white' }}
                    onClick={() => setOpenSilence(!openSilence)}
                  />
                </div>
                {openSilence && (
                  <div style={RadioListStyle}>
                    <div style={conteinerList}>
                      <input type="radio" name="min" id="" />
                      <label htmlFor="min">Por 30 minutos</label>
                    </div>
                    <div style={conteinerList}>
                      <input type="radio" name="hour" id="" />
                      <label htmlFor="hour">Por 60 minutos</label>
                    </div>
                    <div style={conteinerList}>
                      <input type="radio" name="infinite" id="" />
                      <label htmlFor="infinite">Para sempre</label>
                    </div>
                  </div>
                )}
              </div>
              <button style={buttonRemoveStyle}>
                <UserDeleteOutlined />
                remover contato
              </button>
            </div>
          </Flex>
        )}
      </Drawer>
    </>
  )
}
export default MenuInfo
