/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext } from 'react'

export const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: (_term: string) => {},

  activeIndex: 0,
  setActiveIndex: (_index: number) => {},
})
