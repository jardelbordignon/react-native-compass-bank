import 'styled-components/native'
import { ThemeType } from '../styles/themes'

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
