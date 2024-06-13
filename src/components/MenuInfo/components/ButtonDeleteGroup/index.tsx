import { LogoutOutlined } from '@ant-design/icons'
import { buttonRemoveStyle } from '../../styles/style'

export const ButtonDeleteGroup = () => {
  return (
    <button style={buttonRemoveStyle}>
      <LogoutOutlined />
      Sair do grupo
    </button>
  )
}
