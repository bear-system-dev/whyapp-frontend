import { LogoutOutlined } from '@ant-design/icons'
import { buttonRemoveStyle } from '../../style/style'

export const ButtonDeleteGroup = () => {
  return (
    <button style={buttonRemoveStyle}>
      <LogoutOutlined />
      Sair do grupo
    </button>
  )
}
