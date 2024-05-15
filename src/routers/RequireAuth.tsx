import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

interface RequireAuthProps {
  children: React.ReactNode
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const loggedIn = Cookies.get('token')
  if (!loggedIn) {
    return <Navigate to="/login" />
  }
  return children
}
