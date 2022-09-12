import { FlexStyle } from 'react-native'
import styled, { css } from 'styled-components/native'

import { ThemeColorKeys } from 'src/styles/themes'

export type WrapperProps = {
  flex?: FlexStyle['flex']
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  bgColor?: ThemeColorKeys
  p?: string
  w?: string
}

export const Wrapper = styled.View<WrapperProps>`
  ${({
    theme,
    p = '0 8px',
    justify = 'center',
    align = 'center',
    bgColor = 'base',
  }) => css`
    justify-content: ${justify};
    align-items: ${align};
    background-color: ${theme.colors[bgColor]};
    padding: ${p};
  `}
  width: 100%;
`
