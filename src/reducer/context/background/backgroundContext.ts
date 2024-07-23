import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/reducer/store/store'
import { useDispatch, useSelector } from 'react-redux'

interface ChatBackgroundState {
  color1: string
  color2?: string
}

const initialState: ChatBackgroundState = {
  color1: 'rgb(87 132 199) 30%',
  color2: 'rgb(162 77 175 / 50%) 100%',
}

const backgroundReducer = createSlice({
  name: 'backgroundReducer',
  initialState,
  reducers: {
    setBackGroundColors(state, action: PayloadAction<ChatBackgroundState>) {
      state.color1 = action.payload.color1
      state.color2 = action.payload.color2
    },
  },
})

const { setBackGroundColors } = backgroundReducer.actions

export const useStateBackGround = () =>
  useSelector((state: RootState) => state.contextBackGround)

export const useDispatchBackGround = () => {
  const dispatch = useDispatch()
  return {
    setBackGroundColors: (colors: ChatBackgroundState) =>
      dispatch(setBackGroundColors(colors)),
  }
}

export default backgroundReducer.reducer
