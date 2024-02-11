import { RightOutlined } from '@ant-design/icons'
import { Dispatch, SetStateAction } from 'react'

type openMenuProps = {
  activeMenu: boolean
  setActiveMenu: Dispatch<SetStateAction<boolean>>
  classname: string
}

const OpenMenu: React.FC<openMenuProps> = ({
  classname,
  activeMenu,
  setActiveMenu,
}) => {
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
      className={classname}
      onClick={() => setActiveMenu(!activeMenu)}
    />
  )
}
export default OpenMenu
