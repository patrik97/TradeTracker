import React from 'react'

import * as S from './styled'
import { ThemeProvider } from '@mui/material/styles'
import theme from './styles/styledTheme'
import LoginForm from './components/loginForm'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.App>
        <LoginForm />
      </S.App>
    </ThemeProvider>
  )
}

export default App
