import React from 'react'

interface Contact {
  contact: string[]
}
const ContactGroup: React.FC<Contact> = ({ contact }) => {
  return (
    <div
      style={{
        display: 'flex',
        fontSize: '.6rem',
        width: 'max-content',
        color: '#D2D2D2',
        fontWeight: 700,
        gap: '14px',
      }}
    >
      {contact.map((current, index) => (
        <p key={index}>{current}</p>
      ))}
      <p>...</p>
    </div>
  )
}

export default ContactGroup
