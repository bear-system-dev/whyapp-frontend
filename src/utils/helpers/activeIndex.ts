interface ChatDataType {
  username: string
  color: string
  chatPrivate: boolean
  message: string
  time: string
}

export const getMatchCounts = (
  chatData: ChatDataType[],
  searchTerm: string,
): number[] => {
  return chatData.map(
    (chat) => (chat.message.match(new RegExp(searchTerm, 'gi')) || []).length,
  )
}

export const getLocalActiveIndex = (
  activeIndex: number,
  matchCounts: number[],
  index: number,
): number => {
  return activeIndex < matchCounts.slice(0, index).reduce((a, b) => a + b, 0)
    ? -1
    : activeIndex - matchCounts.slice(0, index).reduce((a, b) => a + b, 0)
}
