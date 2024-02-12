import { Flex } from 'antd'
import HeaderMenu from './headermenu'
import Contact from './contact'
import { Members } from '@/mocks/mockMemberGroup'
import React, { Dispatch, SetStateAction } from 'react'
import OnlineConteiner from './OnlineConteiner'
import OfflineConteiner from './OfflineConteiner'

const scrollConteiner: React.CSSProperties = {
  overflowY: 'scroll',
}

const menuConteiner: React.CSSProperties = {
  overflowY: 'scroll',
  backgroundColor: 'rgba(18, 29, 40, 0.75)',
  height: '100vh',
  zIndex: '3',
}

interface AsideMenuProps {
  activeMenu: boolean
  setActiveMenu: Dispatch<SetStateAction<boolean>>
}

const MenuGroup: React.FC<AsideMenuProps> = ({ activeMenu, setActiveMenu }) => {
  return (
    <Flex style={menuConteiner} vertical>
      <HeaderMenu
        name="calin do grau"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <Flex vertical style={scrollConteiner}>
        <OnlineConteiner>
          {Members.filter((data) => data.status === true).map((data, index) => (
            <Contact
              key={index}
              name={data.name}
              status={data.status}
              cargo={data.cargo}
              image={data.image}
            />
          ))}
        </OnlineConteiner>
        <OfflineConteiner>
          {Members.filter((data) => data.status === false).map(
            (data, index) => (
              <Contact
                key={index}
                status={data.status}
                name={data.name}
                cargo={data.cargo}
                image={data.image}
              />
            ),
          )}
        </OfflineConteiner>
      </Flex>
    </Flex>
  )
}
export default MenuGroup
