import { Flex } from 'antd'
import ImageProfile from './imageProfile'
import NameProfile from './nameprofile'
import CargoProfile from './cargo'

interface CargoPofile {
  image?: string
  username?: string
  cargo?: string
}

const ProfileContact: React.FC<CargoPofile> = ({ image, username, cargo }) => {
  return (
    <Flex align="center">
      <ImageProfile size='2rem' image={image} />
      <Flex vertical>
        <CargoProfile cargo={cargo} />
        <NameProfile colortext="black" user={username} />
      </Flex>
    </Flex>
  )
}
export default ProfileContact
