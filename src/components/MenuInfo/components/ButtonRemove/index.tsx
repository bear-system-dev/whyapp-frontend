import { RemoveFriendMutation } from '@/utils/hooks/useAddAndRemoveFriends'
import { UserDeleteOutlined } from '@ant-design/icons'
import Cookies from 'js-cookie'
import { buttonRemoveStyle } from '../../styles/style'
import {
  useDispatchRecipient,
  useStateRecipient,
} from '@/reducer/context/recipient/recipientContext'

interface ButtonRemoveProps {
  onClose: () => void
}

export const ButtonRemove = ({ onClose }: ButtonRemoveProps) => {
  const { recipient } = useStateRecipient()
  const { setRecipient } = useDispatchRecipient()
  const removeFriendMutation = RemoveFriendMutation()
  const userId = Cookies.get('userId')

  return (
    <button
      style={buttonRemoveStyle}
      onClick={() => {
        if (recipient && userId) {
          const friendId = recipient.id
          if (friendId) {
            removeFriendMutation.mutate({
              userId,
              friendId,
            })
          }
        }
        setRecipient(null)
        onClose()
      }}
    >
      <UserDeleteOutlined />
      Remover contato
    </button>
  )
}
