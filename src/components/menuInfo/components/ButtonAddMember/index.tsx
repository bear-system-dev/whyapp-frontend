import { UsergroupAddOutlined } from '@ant-design/icons'
import { ButtonDefaltStyle } from '../../style/style'
import '../../style/style.css'
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
      <button className="button-add-member" style={ButtonDefaltStyle} {...rest}>
        <UsergroupAddOutlined />
        {tagButton}
      </button>
    </>
  )
}
