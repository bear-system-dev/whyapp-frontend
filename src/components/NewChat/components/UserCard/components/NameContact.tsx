type NameContactProps = {
  name: string
}
const NameContact: React.FC<NameContactProps> = ({ name }) => {
  return (
    <p
      style={{
        color: '#FFFFFF',
        fontSize: '.9rem',
        fontWeight: '600',
      }}
    >
      {name}
    </p>
  )
}
export default NameContact
