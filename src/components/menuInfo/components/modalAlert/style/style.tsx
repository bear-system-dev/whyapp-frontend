import React from 'react'
export const modalConteinerStyle: React.CSSProperties = {
  position: 'absolute', // Alterado para posição fixa
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  paddingTop: '34px',
  padding: '8px 24px',
  width: '450px',
  zIndex: 1000,
  backgroundColor: 'rgba(18, 29, 40, 0.9)',
  borderRadius: '14px',
}
export const usersConteinerStyle: React.CSSProperties = {
  overflowY: 'scroll',
  height: 'fit-content',
  maxHeight: '150px',
  width: '100%',
  padding: '0 24px',
}
export const titleModalStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '1rem',
  fontWeight: '600',
}
export const subtitleModalStyle: React.CSSProperties = {
  color: 'white',
  fontSize: '.8rem',
  fontWeight: '300',
}
export const headerModalStyle: React.CSSProperties = {
  width: '100%',
  marginBottom: '14px',
  borderBottom: '.5px solid whitesmoke',
}
export const inputStyle: React.CSSProperties = {
  padding: '8px 8px',
  fontSize: '1rem',
  borderRadius: '14px',
  margin: '14px 0',
  border: 'none',
}
export const conteinerButtonModal: React.CSSProperties = {
  margin: '10px 0',
  width: '100%',
}
export const AddModalButton: React.CSSProperties = {
  border: 'none',
  padding: '8px 24px',
  backgroundColor: 'transparent',
  color: '#358546',
  fontWeight: '700',
  fontSize: '1rem',
  borderRadius: '14px',
}
export const remModalButton: React.CSSProperties = {
  border: 'none',
  padding: '8px 24px',
  backgroundColor: 'transparent',
  color: '#a2c0dd',
  fontWeight: '700',
  fontSize: '1rem',
  borderRadius: '14px',
}
