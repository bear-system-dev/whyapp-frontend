import { LabelStyle, descriptionStyle } from '../../style/style'

export const DescriptionUsers = () => {
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
          width: '80%',
          textAlign: 'start',
        }}
      >
        <p style={LabelStyle}>Descrição</p>
      </div>
      <p style={descriptionStyle}>
        Tá pegando fogo bixo, manda pix ai rapidao pra eu testar um negócio aqui
        ...
      </p>
    </div>
  )
}
