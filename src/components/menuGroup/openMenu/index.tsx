import { RightOutlined } from '@ant-design/icons'
import { Dispatch, SetStateAction } from 'react'

type openMenuProps = {
  setActiveMenu: Dispatch<SetStateAction<boolean>>
}

const OpenMenu: React.FC<openMenuProps> = ({ setActiveMenu }) => {
  return (
    <RightOutlined
      style={{
        backgroundColor: 'rgba(67, 68, 85, 0.6)',
        position: 'absolute',
        left: '96px',
        padding: '10px 20px',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: '2rem',
        borderRadius: ' 0 0 10px 0px',
      }}
      onClick={() => setActiveMenu(true)}
    />
  )
}
export default OpenMenu
