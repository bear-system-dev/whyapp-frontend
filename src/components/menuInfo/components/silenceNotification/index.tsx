import { useState } from 'react'
import {
  RadioListStyle,
  SilenceNotificationsStyle,
  conteinerList,
  menuSilenceStyle,
  textToggle,
} from '../../style/style'
import { DownOutlined } from '@ant-design/icons'

export const SilenceNotifications = () => {
  const [openSilence, setOpenSilence] = useState(false)
  return (
    <>
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
    </>
  )
}
