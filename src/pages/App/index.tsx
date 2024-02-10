import { AppLayout } from '@/layouts/layout'
import { useState } from 'react'
import Login from '../Login/Login'

export function App() {
  const [loggedIn] = useState<boolean>(false)
  return (
    <div>
      {!loggedIn ? ( // negação de loggedIn apenas para facilitar desenvolvimento. em prod retirar o !
        <>
          <AppLayout />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}
