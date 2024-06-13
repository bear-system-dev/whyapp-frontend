export const menuContainer: React.CSSProperties = {
  overflowY: 'auto',
  backgroundColor: 'rgba(18, 29, 40, 0.9)',
  backdropFilter: 'blur(2px)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'fixed',
  insetBlock: 0,
  right: 0,
  width: '360px',
  maxWidth: '70vw',
  zIndex: 2,
  maxHeight: '100%',
}

export const imageProfileStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  borderBottom: '.2px solid #848383',
  padding: '16px 24px',
  width: '100%',
  gap: '16px',
}

export const stutusProfileStyle: React.CSSProperties = {
  display: 'flex',
  gap: '8px',
}
export const containerMenuStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  height: 'fit-content',
  overflowY: 'auto',
  gap: '24px',
  padding: '24px',
  position: 'relative'
}

export const labelStyle: React.CSSProperties = {
  color: '#A3A3A3',
  fontSize: '.7rem',
  fontWeight: 600,
  textAlign: 'start',
  paddingLeft: '16px',
}

export const descriptionStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '.8rem',
  padding: '8px 16px',
  width: '98%',
}

export const silenceNotificationsStyle: React.CSSProperties = {
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#434455',
  flexDirection: 'column',
  borderRadius: '8px',
  width: '100%',
}

export const textToggle: React.CSSProperties = {
  color: 'white',
  padding: '8px 16px',
  minWidth: '100%',
  fontSize: '1rem',
}

export const radioListStyle: React.CSSProperties = {
  backgroundColor: '#434455',
  width: '87%',
  padding: '10px 30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  borderRadius: '0  0 14px 14px',
}

export const containerList: React.CSSProperties = {
  display: 'flex',
  gap: '14px',
  fontSize: '.8rem',
  color: 'white',
}

export const menuSilenceStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  width: 'fit-content',
  justifyContent: 'center',
  gap: '14px',
}

export const buttonRemoveStyle: React.CSSProperties = {
  cursor: 'pointer',
  backgroundColor: 'var(--shadow-alert-200)',
  color: 'white',
  border: 'none',
  padding: '10px 58px',
  minWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px',
  gap: '10px',
  borderRadius: '8px',
  fontSize: '1rem',
}

export const buttonDefaultStyle: React.CSSProperties = {
  cursor: 'pointer',
  backgroundColor: 'rgba(18, 29, 40, 0.9)',
  color: 'white',
  border: 'none',
  padding: '14px 30px',
  minWidth: '100%',
  margin: '0 24px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  borderRadius: '14px',
  fontSize: '1rem',
}
