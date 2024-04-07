import { UsergroupDeleteOutlined } from '@ant-design/icons'
import '../../style/style.css'
import { ButtonDefaltStyle } from '../../style/style'
interface ButtonRemoveMemberProps {
  tagButton: string
}
export const ButtonRemoveMember = ({ tagButton }: ButtonRemoveMemberProps) => {
  return (
    <button className="button-remove-member" style={ButtonDefaltStyle}>
      <UsergroupDeleteOutlined />
      {tagButton}
    </button>
  )
}
