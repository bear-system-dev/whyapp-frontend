import { Dispatch, SetStateAction, createContext } from 'react'

export type Theme = 'light' | 'dark'

export const ThemeContext = createContext<{
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}>({
  theme: 'dark',
  setTheme: () => {},
})
