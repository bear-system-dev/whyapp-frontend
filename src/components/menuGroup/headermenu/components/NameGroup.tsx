type NameGroupProps = {
  name: string
}
const NameGroup: React.FC<NameGroupProps> = ({ name }) => {
  return (
    <p
      style={{
        color: '#FFFFFF',
        fontSize: '1rem',
        fontWeight: '700',
      }}
    >
      {name}
    </p>
  )
}
export default NameGroup
