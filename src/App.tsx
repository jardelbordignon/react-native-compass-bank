import React from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import { Home } from 'src/screens/Home'

import themes from './styles/themes'

export function App() {
  const theme = useColorScheme() || 'light'

  return (
    <ThemeProvider theme={themes[theme]}>
      <Home />
    </ThemeProvider>
  )
}
