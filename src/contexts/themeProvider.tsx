import { ReactNode, useState } from 'react'
import { Theme, ThemeContext } from './themeContext'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const storedTheme = localStorage.getItem('appTheme')
  const validTheme =
    storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : 'dark'
  const [theme, setTheme] = useState<Theme>(validTheme as Theme)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
