import React from 'react'
import { useColorScheme } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'

import { Statement } from './screens/Statement'
import themes from './styles/themes'

export function App() {
  const theme = useColorScheme() || 'light'

  return (
    <ThemeProvider theme={themes[theme]}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Statement />
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}
