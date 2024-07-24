import { useStateIsOnline } from '@/reducer/context/isOnline/isOnline'
import { useStateRecipient } from '@/reducer/context/recipient/recipientContext'

export const useRecipientOnlineStatus = () => {
  const { recipient } = useStateRecipient()
  const { isOnline } = useStateIsOnline()

  const recipientOnlineStatus = isOnline.find(
    (isUserOnline) => isUserOnline.id === recipient?.id,
  )?.isOnline

  return { recipientOnlineStatus }
}
