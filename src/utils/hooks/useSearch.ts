import { SearchContext } from '@/contexts/searchContext'
import { chatData } from '@/mocks/chats-mocks'
import { getMatchCounts } from '@/utils/helpers/activeIndex'
import { ChangeEvent, useContext } from 'react'

export const useSearch = () => {
  const { searchTerm, setSearchTerm, activeIndex, setActiveIndex } =
    useContext(SearchContext)

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)
  }

  const matchCounts = getMatchCounts(chatData, searchTerm)
  const totalMatches = matchCounts.reduce((a, b) => a + b, 0)

  const handleNextHighlight = () => {
    if (activeIndex < totalMatches - 1) {
      setActiveIndex(activeIndex + 1)
      document.querySelector('.Active')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  const handlePrevHighlight = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
      document.querySelector('.Active')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  const isNextDisabled = activeIndex >= totalMatches - 1
  const isPrevDisabled = activeIndex <= 0

  return {
    searchTerm,
    handleSearchInputChange,
    handleNextHighlight,
    handlePrevHighlight,
    isNextDisabled,
    isPrevDisabled,
  }
}
