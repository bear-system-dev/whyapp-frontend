import ImageProfile from '@/components/profile/imageProfile'
import NameProfile from '@/components/profile/nameprofile'
import { Button, Flex } from 'antd'
// import StatusContact from './components/statusgroups'
import { username, users } from '@/mocks/mockUserArray'
import { MoreOutlined } from '@ant-design/icons'
import ContactGroup from './components/contactsgroups'
import Header from './components/headerConteiner'
import Conteiner from './components/headerConteiner/conteiner'

const HeaderChat = () => {
  return (
    <Header>
      <Conteiner>
        <Flex
          align="center"
          style={{
            gap: '24px',
          }}
        >
          <ImageProfile
            size={'60px'}
            image="031b68882265722dede1080a200f015a.jpg"
          />
          <div>
            <NameProfile user={username} colortext="#FFFFFF" />
            {/* <StatusContact status="online" /> */}
            <ContactGroup contact={users} />
          </div>
        </Flex>
        <Button
          style={{
<<<<<<< HEAD:src/layout/header/index.tsx
            color: 'white',
            fontWeight: '700',
            fontSize: '1.4rem',
=======
            all: 'unset',
            display: 'flex',
>>>>>>> upstream/main:src/components/header/index.tsx
          }}
          icon={
            <MoreOutlined
              style={{
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '2.5rem',
              }}
            />
          }
        />
      </Conteiner>
    </Header>
  )
}
export default HeaderChat
// 17212B
