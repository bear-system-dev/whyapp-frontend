import { SearchProvider } from '@/contexts/searchProvider'
import { AppLayout } from '@/layouts/layout'
import './app.css'

export default function App() {
  return (
    <SearchProvider>
      <AppLayout />
    </SearchProvider>
  )
}
