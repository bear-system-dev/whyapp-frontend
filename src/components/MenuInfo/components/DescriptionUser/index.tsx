import { labelStyle, descriptionStyle } from '../../styles/style'

export const DescriptionUsers = ({
  description,
}: {
  description: string | undefined
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '98%',
          textAlign: 'start',
        }}
      >
        <p style={labelStyle}>Descrição</p>
      </div>
      <p style={descriptionStyle}>{description}</p>
    </div>
  )
}
