import { UsergroupAddOutlined } from '@ant-design/icons'
import { buttonDefaultStyle } from '../../styles/style'
import '../../styles/style.css'
import { ButtonHTMLAttributes } from 'react'

interface ButtonAddMemberProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tagButton: React.ReactNode
}

export const ButtonAddMember = ({
  tagButton,
  ...rest
}: ButtonAddMemberProps) => {
  return (
    <>
      <button className="button-add-member" style={buttonDefaultStyle} {...rest}>
        <UsergroupAddOutlined />
        {tagButton}
      </button>
    </>
  )
}
