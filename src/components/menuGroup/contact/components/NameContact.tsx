type NameContactProps = {
  name: string
  color: string
}
const NameContact: React.FC<NameContactProps> = ({ color, name }) => {
  return (
    <p
      style={{
        color,
        fontSize: '1.2rem',
        fontWeight: '600',
      }}
    >
      {name}
    </p>
  )
}
export default NameContact
