import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './Auth.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
