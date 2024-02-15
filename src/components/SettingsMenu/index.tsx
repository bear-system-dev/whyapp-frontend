import {
  BgColorsOutlined,
  CommentOutlined,
  DesktopOutlined,
  QuestionCircleOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button, Col, Divider, Drawer, Row } from 'antd'
import React, { useState } from 'react'
import { ChatsMenu } from './components/ChatsMenu'
import { ProfileMenu } from './components/ProfileMenu'
import './style.css'

const settingsButtonStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#E6E6E6',
  height: 'auto',
  width: '100%',
}

const drawerStyles: React.CSSProperties = {
  background: '#1E2C39',
  borderRadius: '8px',
  position: 'absolute',
  bottom: 8,
  left: 8,
  height: '360px',
  width: '400px',
}

const dividerStyles: React.CSSProperties = {
  background: '#4A4B53',
  height: '360px',
  margin: 0,
}

const optionButtonStyles: React.CSSProperties = {
  all: 'unset',
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  cursor: 'pointer',
  width: '100%',
}

const logoutButtonContainerStyles: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'end',
  flexGrow: 1,
  marginBottom: '2rem',
}

const leftMenuContentStyles: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  color: '#FFFFFF',
  padding: '1rem 0 0',
}

const rightMenuContentStyles: React.CSSProperties = {
  color: '#FFFFFF',
  padding: '1.5rem 1rem',
}

export const SettingsMenu = () => {
  const [settingsMenuOpen, setSettingsMenuOpen] = useState(false)

  const showDrawer = () => {
    setSettingsMenuOpen(true)
  }

  const onClose = () => {
    setSettingsMenuOpen(false)
  }

  // Menu Button functions
  const [activeButton, setActiveButton] = useState('')
  const handleButtonClick = (buttonName: React.SetStateAction<string>) => {
    setActiveButton(buttonName)
  }

  return (
    <div>
      <Button
        className="general-settings-button"
        style={settingsButtonStyle}
        shape="circle"
        icon={<SettingOutlined />}
        type="primary"
        onClick={showDrawer}
      />
      <Drawer
        placement="left"
        closable={false}
        onClose={onClose}
        width={'408px'}
        open={settingsMenuOpen}
        getContainer={document.body}
        style={drawerStyles}
      >
        <Row style={{ display: 'flex', flexWrap: 'nowrap' }}>
          <Col
            style={{
              display: 'flex',
              flexDirection: 'column',
              minWidth: '7.5vw',
            }}
          >
            <Row gutter={[0, 8]} style={leftMenuContentStyles}>
              <Col
                span={'auto'}
                className={`option-button-container ${activeButton === 'Gerais' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Gerais')}
              >
                <Button icon={<DesktopOutlined />} style={optionButtonStyles}>
                  Gerais
                </Button>
              </Col>
              <Col
                span={'auto'}
                className={`option-button-container ${activeButton === 'Perfil' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Perfil')}
              >
                <Button icon={<UserOutlined />} style={optionButtonStyles}>
                  Perfil
                </Button>
              </Col>
              <Col
                span={'auto'}
                className={`option-button-container ${activeButton === 'Chats' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Chats')}
              >
                <Button icon={<CommentOutlined />} style={optionButtonStyles}>
                  Chats
                </Button>
              </Col>
              <Col
                span={'auto'}
                className={`option-button-container ${activeButton === 'Customização' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Customização')}
              >
                <Button icon={<BgColorsOutlined />} style={optionButtonStyles}>
                  Customização
                </Button>
              </Col>
              <Col
                span={'auto'}
                className={`option-button-container ${activeButton === 'Ajuda' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Ajuda')}
              >
                <Button
                  icon={<QuestionCircleOutlined />}
                  style={optionButtonStyles}
                >
                  Ajuda
                </Button>
              </Col>
            </Row>
            <Row style={logoutButtonContainerStyles}>
              <Button
                danger
                type="primary"
                shape="round"
                style={{ minWidth: '7.5rem' }}
                onClick={() => {
                  alert(
                    'Logout feito com sucesso! Redirecionando para a página de Login...',
                  )
                  window.location.href = 'http://localhost:5173/login'
                }}
              >
                Logout
              </Button>
            </Row>
          </Col>
          <Divider type="vertical" style={dividerStyles} />
          <Col flex={1}>
            <Row style={rightMenuContentStyles}>
              <Col flex={1}>
                {activeButton === 'Gerais' && <></>}
                {activeButton === 'Perfil' && <ProfileMenu />}
                {activeButton === 'Chats' && <ChatsMenu />}
                {activeButton === 'Customização' && <></>}
                {activeButton === 'Ajuda' && <></>}
              </Col>
            </Row>
          </Col>
        </Row>
      </Drawer>
    </div>
  )
}