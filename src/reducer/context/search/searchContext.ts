import { RootState } from '@/reducer/store/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

interface SearchState {
  searchTerm: string
  activeIndex: number
}

const initialState: SearchState = {
  searchTerm: '',
  activeIndex: -1,
}

const searchReducer = createSlice({
  name: 'searchReducer',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload
    },
    setActiveIndex(state, action: PayloadAction<number>) {
      state.activeIndex = action.payload
    },
  },
})

const { setSearchTerm, setActiveIndex } = searchReducer.actions

export const useStateSearch = () =>
  useSelector((state: RootState) => state.contextSearch)

export const useDispatchSearch = () => {
  const dispatch = useDispatch()
  return {
    setSearchTerm: (searchTerm: string) => dispatch(setSearchTerm(searchTerm)),
    setActiveIndex: (activeIndex: number) =>
      dispatch(setActiveIndex(activeIndex)),
  }
}

export default searchReducer.reducer
