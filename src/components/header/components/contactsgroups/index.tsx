import React from 'react'

interface Contact {
  contact: string[]
}

const ContactGroup: React.FC<Contact> = ({ contact }) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1rem',
    fontSize: '1rem',
    width: '77.5vw',
    color: '#FFFFFF66',
    fontWeight: 500,
    lineHeight: 1.5,
    overflow: 'hidden',
  }

  const textStyle: React.CSSProperties = {
    maxWidth: '100%',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  }

  const firstEightContacts = contact.slice(0, 8)

  return (
    <div style={containerStyle}>
      {firstEightContacts.map((current, index) => {
        const firstName = current.split(' ')[0].slice(0, 12)
        return (
          <span key={index} style={textStyle}>
            {firstName}
            {index < 7 ? ',' : '...'}
          </span>
        )
      })}
    </div>
  )
}

export default ContactGroup
