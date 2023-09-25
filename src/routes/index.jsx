import { BrowserRouter } from 'react-router-dom'

import { AuthRoutes } from './Auth.routes'
import { CustomerRoutes } from './Customer.routes'
import { AdminRoutes } from './admin.routes'

import { useAuth } from '../hooks/auth'

export function Routes() {
  const { user } = useAuth()

  function AccessRoute() {
    switch (user.role) {
      case 'admin':
        return <AdminRoutes />
      case 'customer':
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  )
}
