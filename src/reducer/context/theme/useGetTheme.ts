import { useEffect } from 'react'
import { Theme, useDispatchTheme } from './themeContext'

export const useGetTheme = () => {
  const { setTheme } = useDispatchTheme()
  useEffect(() => {
    const storedTheme = localStorage.getItem('appTheme')
    const theme: Theme =
      storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark'
    setTheme(theme)
  }, [setTheme])
}
