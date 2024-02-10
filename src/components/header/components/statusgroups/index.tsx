import React from 'react'

interface Status {
  status: string
}

const StatusContact: React.FC<Status> = ({ status }) => {
  return (
    <p
      style={{
        fontSize: '.6rem',
        color: '#529E66',
        fontWeight: '700',
      }}
    >
      {status}
    </p>
  )
}
export default StatusContact
