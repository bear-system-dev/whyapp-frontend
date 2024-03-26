import { UserDeleteOutlined } from '@ant-design/icons'
import { buttonRemoveStyle } from '../../style/style'

export const ButtonRemove = () => {
  return (
    <button style={buttonRemoveStyle}>
      <UserDeleteOutlined />
      remover contato
    </button>
  )
}
