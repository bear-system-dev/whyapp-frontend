import { ButtonExample } from '@/components/Button'
import { useState } from 'react'
import Login from '../Login/Login'

export function App() {
  const [loggedIn] = useState<boolean>(false)
  return (
    <div>
      {loggedIn ? (
        <>
          <h1>Hello, World!</h1>
          <ButtonExample />
        </>
      ) : (
        <Login />
      )}
    </div>
  )
}
