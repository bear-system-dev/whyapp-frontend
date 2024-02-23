import { ChatContext } from '@/contexts/chatContext'
import { SearchContext } from '@/contexts/searchContext'
import { getMatchCounts } from '@/utils/helpers/activeIndex'
import { ChangeEvent, useContext, useEffect } from 'react'

export const useSearch = () => {
  const { searchTerm, setSearchTerm, activeIndex, setActiveIndex } =
    useContext(SearchContext)

  const { messages } = useContext(ChatContext)

  const matchCounts = getMatchCounts(messages, searchTerm)
  const totalMatches = matchCounts.reduce((a, b) => a + b, 0)

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value
    setSearchTerm(searchTerm)

    if (!totalMatches || totalMatches === 0) {
      setActiveIndex(0)
    }

    if (totalMatches || totalMatches > 0) {
      setActiveIndex(1)
    }
  }

  useEffect(() => {
    document.querySelector('.Active')?.scrollIntoView({
      behavior: 'auto',
      block: 'center',
    })
  }, [activeIndex])

  useEffect(() => {
    if (searchTerm && totalMatches > 0) {
      document.querySelector('.Active')?.scrollIntoView({
        behavior: 'auto',
        block: 'center',
      })
    }
  }, [activeIndex, searchTerm, totalMatches])

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
    activeIndex,
    totalMatches: matchCounts.reduce((acc, curr) => acc + curr, 0),
  }
}
