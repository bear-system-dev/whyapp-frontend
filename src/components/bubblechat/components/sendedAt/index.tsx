interface Send {
  time: string
}
const SendedAt: React.FC<Send> = ({ time }) => {
  return (
    <p
      style={{
        fontSize: '.5rem',
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
