import React, { Dispatch, SetStateAction } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import NameGroup from './components/NameGroup'
import Conteiner from './components/Conteiner'

interface HeaderMenuProps {
  name: string
  activeMenu: boolean
  setActiveMenu: Dispatch<SetStateAction<boolean>>
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({
  activeMenu,
  setActiveMenu,
  name,
}) => {
  return (
    <Conteiner>
      <NameGroup name={name} />
      <CloseOutlined
        onClick={() => setActiveMenu(!activeMenu)}
        style={{
          color: '#FFFFFF',
          fontSize: '1.5rem',
        }}
      />
    </Conteiner>
  )
}
export default HeaderMenu
