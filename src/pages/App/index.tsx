import { ChatProvider } from '@/contexts/chatProvider'
import { AppLayout } from '@/layouts/layout'
import './app.css'

export default function App() {
  return (
    <ChatProvider>
      <AppLayout />
    </ChatProvider>
  )
}
