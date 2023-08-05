import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyle'
import theme from "./style/theme"

import { NewDish } from './pages/NewDish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <NewDish/>
    </ThemeProvider>
  </React.StrictMode>,
)
