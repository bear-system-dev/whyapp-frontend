import { ChatContext } from '@/contexts/chatContext'
import { RemoveFriendMutation } from '@/utils/hooks/useAddAndRemoveFriends'
import { UserDeleteOutlined } from '@ant-design/icons'
import Cookies from 'js-cookie'
import { useContext } from 'react'
import { buttonRemoveStyle } from '../../style/style'

interface ButtonRemoveProps {
  onClose: () => void
}

export const ButtonRemove = ({ onClose }: ButtonRemoveProps) => {
  const { recipient, setRecipient } = useContext(ChatContext)
  const removeFriendMutation = RemoveFriendMutation()
  const userId = Cookies.get('userId')

  return (
    <button
      style={buttonRemoveStyle}
      onClick={() => {
        if (recipient && userId) {
          removeFriendMutation.mutate({
            userId,
            friendId: recipient.id,
          })
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
