import { ReactNode, useState } from 'react'
import { SearchContext } from './searchContext'

interface SearchProviderProps {
  children: ReactNode
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeIndex, setActiveIndex] = useState(-1)

  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm, activeIndex, setActiveIndex }}
    >
      {children}
    </SearchContext.Provider>
  )
}
