import { UsergroupAddOutlined } from '@ant-design/icons'
import { ButtonDefaltStyle } from '../../style/style'
import '../../style/style.css'
interface ButtonAddMemberProps {
  tagButton: string
}
export const ButtonAddMember = ({ tagButton }: ButtonAddMemberProps) => {
  return (
    <button className="button-add-member" style={ButtonDefaltStyle}>
      <UsergroupAddOutlined />
      {tagButton}
    </button>
  )
}
