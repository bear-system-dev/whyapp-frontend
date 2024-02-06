import { App } from '@/pages/App'
import { Route, Routes } from 'react-router-dom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}
