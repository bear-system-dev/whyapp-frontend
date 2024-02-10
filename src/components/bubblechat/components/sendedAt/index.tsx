interface Send {
  time: string
}
const SendedAt: React.FC<Send> = ({ time }) => {
  return (
    <p
      style={{
        fontSize: '0.75rem',
        lineHeight: 1.5,
        margin: '0px',
        textAlign: 'end',
        color: 'white',
      }}
    >
      {time}
    </p>
  )
}
export default SendedAt
