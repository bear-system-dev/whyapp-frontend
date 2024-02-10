import defaultAvatar from '@/assets/defaultAvatar.svg'
import { Flex } from 'antd'
import CargoProfile from './cargo'
import ImageProfile from './imageProfile'
import NameProfile from './nameprofile'

interface CargoPofile {
  image?: string
  username: string
  cargo?: string
}

const ProfileContact: React.FC<CargoPofile> = ({ image, username, cargo }) => {
  return (
    <Flex align="center">
      <ImageProfile size="2.5rem" image={image || defaultAvatar} />
      <Flex vertical align="start">
        <CargoProfile cargo={cargo || 'member'} />
        <NameProfile colortext="#FFF" user={username} />
      </Flex>
    </Flex>
  )
}
export default ProfileContact
