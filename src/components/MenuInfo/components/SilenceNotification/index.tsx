import { useState } from 'react'
import {
  radioListStyle,
  silenceNotificationsStyle,
  containerList,
  menuSilenceStyle,
  textToggle,
} from '../../styles/style'
import { Icon } from '@iconify/react/dist/iconify.js'

export const SilenceNotifications = () => {
  const [openSilence, setOpenSilence] = useState(false)
  return (
    <>
      <div style={silenceNotificationsStyle}>
        <div style={menuSilenceStyle}
          onClick={() => setOpenSilence(!openSilence)}>
          <p style={textToggle}>Silenciar notificações</p>
          <div style={{ fontSize: '1rem' }}>
            <Icon aria-hidden='true'
              style={{ display: 'block', color: '#fff', opacity: 0.75 }}
              icon={openSilence ? 'ic:round-keyboard-arrow-up' : 'ic:round-keyboard-arrow-down'}
            />
          </div>
        </div>
        {openSilence && (
          <div style={radioListStyle}>
            <div style={containerList}>
              <input type="radio" name="min" id="" />
              <label htmlFor="min">Por 30 minutos</label>
            </div>
            <div style={containerList}>
              <input type="radio" name="hour" id="" />
              <label htmlFor="hour">Por 60 minutos</label>
            </div>
            <div style={containerList}>
              <input type="radio" name="infinite" id="" />
              <label htmlFor="infinite">Para sempre</label>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
