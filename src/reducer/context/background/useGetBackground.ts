import { useEffect } from 'react'
import { useDispatchBackGround } from './backgroundContext'

export const useGetBackground = () => {
  const { setBackGroundColors } = useDispatchBackGround()
  useEffect(() => {
    const userSavedChatBackgroundColor = localStorage.getItem(
      'chatBackgroundStyle',
    )
    if (userSavedChatBackgroundColor !== null) {
      setBackGroundColors(JSON.parse(userSavedChatBackgroundColor))
    }
  }, [setBackGroundColors])
}
