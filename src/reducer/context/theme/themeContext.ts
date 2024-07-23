import { RootState } from '@/reducer/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

export type Theme = 'light' | 'dark'

interface ThemeState {
  theme: Theme
}

const initialState: ThemeState = {
  theme: 'dark',
}

const themeReducer = createSlice({
  name: 'themeReducer',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      state.theme = action.payload.theme
    },
  },
})

const { setTheme } = themeReducer.actions

export const useStateTheme = () =>
  useSelector((state: RootState) => state.contextTheme)

export const useDispatchTheme = () => {
  const dispatch = useDispatch()
  return {
    setTheme: (theme: Theme) => dispatch(setTheme({ theme })),
  }
}

export default themeReducer.reducer
