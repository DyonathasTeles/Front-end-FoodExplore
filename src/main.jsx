import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './style/GlobalStyle'
import theme from "./style/theme"

import { Dish } from './pages/Dish'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <Dish/>
    </ThemeProvider>
  </React.StrictMode>,
)
