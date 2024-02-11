import { Flex } from 'antd'
import './index.css'
import HeaderMenu from './headermenu'
import Contact from './contact'
import { Members } from '@/mocks/mockMemberGroup'
import { Dispatch, SetStateAction } from 'react'

interface AsideMenuProps {
  activeMenu: boolean
  setActiveMenu: Dispatch<SetStateAction<boolean>>
}

const MenuGroup: React.FC<AsideMenuProps> = ({ activeMenu, setActiveMenu }) => {
  return (
    <Flex className="menugroup" vertical>
      <HeaderMenu
        name="calin do grau"
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <Flex
        vertical
        style={{
          overflowY: 'scroll',
        }}
      >
        <div style={{ borderBottom: '1px solid #8D8686' }}>
          <p
            style={{
              color: '#FFFFFF',
              fontSize: '1.2rem',
              fontWeight: '700',
              padding: '10px 20px',
            }}
          >
            online
          </p>
          {Members.filter((data) => data.status === true).map((data, index) => (
            <Contact
              key={index}
              name={data.name}
              status={data.status}
              cargo={data.cargo}
              image={data.image}
            />
          ))}
        </div>
        <div>
          <p
            style={{
              color: '#8D8686',
              fontSize: '1.2rem',
              fontWeight: '700',
              padding: '10px 20px',
            }}
          >
            offline
          </p>
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
        </div>
      </Flex>
    </Flex>
  )
}
export default MenuGroup
