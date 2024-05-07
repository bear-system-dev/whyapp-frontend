import { UsergroupDeleteOutlined } from '@ant-design/icons'
import '../../styles/style.css'
import { buttonDefaultStyle } from '../../styles/style'
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
      style={buttonDefaultStyle}
      {...rest}
    >
      <UsergroupDeleteOutlined />
      {tagButton}
    </button>
  )
}
