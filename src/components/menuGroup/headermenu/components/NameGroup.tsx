type NameGroupProps = {
  name: string
}
const NameGroup: React.FC<NameGroupProps> = ({ name }) => {
  return (
    <p
      style={{
        color: '#FFFFFF',
        fontSize: '1.6rem',
        fontWeight: '700',
      }}
    >
      {name}
    </p>
  )
}
export default NameGroup
