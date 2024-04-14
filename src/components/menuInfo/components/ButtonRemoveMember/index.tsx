import { UsergroupDeleteOutlined } from '@ant-design/icons'
import '../../style/style.css'
import { ButtonDefaltStyle } from '../../style/style'
import { ButtonHTMLAttributes } from 'react'

interface ButtonRemMemberProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tagButton: string
}
export const ButtonRemoveMember = ({
  tagButton,
  ...rest
}: ButtonRemMemberProps) => {
  return (
    <button
      className="button-remove-member"
      style={ButtonDefaltStyle}
      {...rest}
    >
      <UsergroupDeleteOutlined />
      {tagButton}
    </button>
  )
}
