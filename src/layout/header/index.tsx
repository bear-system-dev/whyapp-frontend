import ImageProfile from '@/components/profile/imageProfile'
import NameProfile from '@/components/profile/nameprofile'
import { Flex } from 'antd'
// import StatusContact from './components/statusgroups'
import { MoreOutlined } from '@ant-design/icons'
import Header from './components/headerConteiner'
import Conteiner from './components/headerConteiner/conteiner'
import ContactGroup from './components/contactsgroups'

const username = 'carlin do grau'

const contact = [
  'marcia luciana',
  'reginaldo costa',
  'luiz herique',
  'poliana vasconcelo',
]

const HeaderChat = () => {
  return (
    <Header>
      <Conteiner>
        <Flex
          align="center"
          style={{
            paddingLeft: '64px',
            gap: '24px',
          }}
        >
          <ImageProfile
            size="2.5rem"
            image="031b68882265722dede1080a200f015a.jpg"
          />
          <div>
            <NameProfile user={username} colortext="#FFFFFF" />
            {/* <StatusContact status="online" /> */}
            <ContactGroup contact={contact} />
          </div>
        </Flex>
        <MoreOutlined
          style={{
            color: 'white',
            fontWeight: '700',
            fontSize: '1.4rem',
            paddingRight: '2em',
          }}
        />
      </Conteiner>
    </Header>
  )
}
export default HeaderChat
// 17212B
