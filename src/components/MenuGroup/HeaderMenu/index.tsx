import React from 'react'
import Container from './components/Container'
import NameGroup from './components/NameGroup'

interface HeaderMenuProps {
  name: string
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ name }) => {
  return (
    <Container>
      <NameGroup name={name} />
    </Container>
  )
}
export default HeaderMenu
