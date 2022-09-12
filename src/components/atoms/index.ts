import { ActivityIndicatorProps, FlexStyle } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styled, { css } from 'styled-components/native'

import { ThemeColorKeys, ThemeFontKeys } from 'src/styles/themes'

type RowProps = {
  justify?: FlexStyle['justifyContent']
  align?: FlexStyle['alignItems']
  wrap?: FlexStyle['flexWrap']
  m?: string
  p?: string
  w?: string
}

type TxtProps = {
  font?: ThemeFontKeys
  color?: ThemeColorKeys
  size?: number
  m?: string
  maxW?: string
}

type IconProps = {
  color?: ThemeColorKeys
  size?: number
  m?: string
}

type LoadingIndicatorProps = ActivityIndicatorProps & {
  color?: ThemeColorKeys
  m?: string
}

export const Row = styled.View<RowProps>`
  flex-direction: row;
  ${({
    justify = 'space-between',
    align = 'center',
    wrap = 'nowrap',
    m = 0,
    p = 0,
    w = '100%',
  }) => css`
    justify-content: ${justify};
    align-items: ${align};
    flex-wrap: ${wrap};
    margin: ${m};
    padding: ${p};
    width: ${w};
  `}
`

export const Txt = styled.Text<TxtProps>`
  ${({ theme, font = 'medium', color = 'text', size = 18, m = 0, maxW = '100%' }) => css`
    font-family: ${theme.fonts[font]};
    color: ${theme.colors[color]};
    font-size: ${size}px;
    margin: ${m};
    max-width: ${maxW};
  `}
`

/**
 * <Icon name="home" size={40} color="text" margin="10px 20px" />
 */
export const Icon = styled(MaterialCommunityIcons)<IconProps>`
  ${({ theme, color = 'gray', size = 20, m = 0 }) => css`
    color: ${theme.colors[color]};
    font-size: ${size}px;
    margin: ${m};
  `}
`

export const BorderlessBtn = styled(BorderlessButton)`
  padding: 5px;
`

export const LoadingIndicator = styled.ActivityIndicator<LoadingIndicatorProps>`
  ${({ theme, color = 'text', m = 0 }) => css`
    color: ${theme.colors[color]};
    margin: ${m};
  `}
`
