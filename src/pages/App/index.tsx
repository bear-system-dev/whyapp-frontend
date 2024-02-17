import { SearchContext } from '@/contexts/searchContext'
import { AppLayout } from '@/layouts/layout'
import { useState } from 'react'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      <AppLayout />
    </SearchContext.Provider>
  )
}
