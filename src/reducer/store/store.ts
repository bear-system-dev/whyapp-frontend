import { configureStore } from '@reduxjs/toolkit'
import contextBackGround from '@/reducer/context/background/backgroundContext'
import contextTheme from '@/reducer/context/theme/themeContext'
import contextSearch from '@/reducer/context/search/searchContext'

export const store = configureStore({
  reducer: { contextBackGround, contextTheme, contextSearch },
})

export type RootState = ReturnType<typeof store.getState>
