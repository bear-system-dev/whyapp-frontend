import { ChatProvider } from '@/contexts/chatProvider'
import { SearchProvider } from '@/contexts/searchProvider'
import { AppLayout } from '@/layouts/layout'
import './app.css'

export default function App() {
  return (
    <ChatProvider>
      <SearchProvider>
        <AppLayout />
      </SearchProvider>
    </ChatProvider>
  )
}
