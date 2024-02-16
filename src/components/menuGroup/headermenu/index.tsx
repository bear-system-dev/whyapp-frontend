import React from 'react'
import NameGroup from './components/NameGroup'
import Conteiner from './components/Conteiner'

interface HeaderMenuProps {
  name: string
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ name }) => {
  return (
    <Conteiner>
      <NameGroup name={name} />
    </Conteiner>
  )
}
export default HeaderMenu
