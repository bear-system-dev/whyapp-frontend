import React from 'react'

interface Status {
  status: 'online' | 'offline'
}

const StatusContact: React.FC<Status> = ({ status }) => {
  return (
    <p
      style={{
        fontSize: '.7rem',
        textTransform: 'capitalize',
        color:
          status === 'online' ? 'var(--t-primary-20)' : 'var(--neutral-100)',
        fontWeight: '700',
      }}
    >
      {status}
    </p>
  )
}
export default StatusContact
