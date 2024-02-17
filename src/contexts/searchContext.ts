import { createContext } from 'react'

export const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: (term: string) => {},
})
