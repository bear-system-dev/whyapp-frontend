import { Flex } from 'antd'
import ImageProfile from './imageProfile'
import NameProfile from './nameprofile'
import CargoProfile from './cargo'

interface CargoPofile {
  username: string
  cargo: string
}

const ProfileContact: React.FC<CargoPofile> = ({ username, cargo }) => {
  return (
    <Flex align="center">
      <ImageProfile image="/031b68882265722dede1080a200f015a.jpg" />
      <Flex vertical>
        <CargoProfile cargo={cargo} />
        <NameProfile user={username} />
      </Flex>
    </Flex>
  )
}
export default ProfileContact
