export type ThemeType = {
  colors: {
    info: string
    warning: string
    success: string
    error: string

    text: string
    background: string
    highlight: string
    gray: string
  }
  fonts: {
    regular: string
    medium: string
    bold: string
  }
}

export type ThemeColorKeys = keyof ThemeType['colors']

const fonts = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
}

const commonColors = {
  info: 'rgb(2, 136, 209)',
  warning: 'rgb(245, 124, 0)',
  success: 'rgb(56, 142, 60)',
  error: 'rgb(211, 47, 47)',

  highlight: '#00C1AF',
  gray: '#828282',
}

const lightColors: ThemeType['colors'] = {
  ...commonColors,
  text: '#202021',
  background: '#F8F8F8',
}

const darkColors: ThemeType['colors'] = {
  ...commonColors,
  text: '#F8F8F8',
  background: '#202021',
}

const light = {
  colors: lightColors,
  fonts,
}

const dark = {
  colors: darkColors,
  fonts,
}

export default { dark, light }

/** referêcia de opacidade em cor hexadecimal;
100% — FF
95% — F2
90% — E6
85% — D9
80% — CC
75% — BF
70% — B3
65% — A6
60% — 99
55% — 8C
50% — 80
45% — 73
40% — 66
35% — 59
30% — 4D
25% — 40
20% — 33
15% — 26
10% — 1A
5% — 0D
0% — 00

exemplo: branco opacidade 80% -> #FFFFFFCC
*/

// export type ThemeType = {
//   colors: {
//     text: string
//     text50: string
//     title: string
//     title50: string
//     primary: string
//     secondary: string
//     info: string
//     info_bg: string
//     warning: string
//     warning_bg: string
//     success: string
//     success_bg: string
//     danger: string
//     danger_bg: string
//     gray: string
//     white: string
//     black: string
//   }
//   fonts: {
//     regular: string
//     medium: string
//     bold: string
//   }
// }

// export type ThemeColorKeys = keyof ThemeType['colors']
// export type ThemeFontKeys = keyof ThemeType['fonts']

// const fonts = {
//   regular: 'Poppins-Regular',
//   medium: 'Poppins-Medium',
//   bold: 'Poppins-Bold',
// }

// const commonColors = {
//   info: 'rgb(2, 136, 209)',
//   info_bg: '#b6effb',
//   warning: 'rgb(245, 124, 0)',
//   warning_bg: '#ffecb5',
//   success: 'rgb(56, 142, 60)',
//   success_bg: '#b6effb',
//   danger: 'rgb(211, 47, 47)',
//   danger_bg: '#f5c2c7',
//   white: '#F0F2F5',
//   black: '#111111',
// }

// const lightColors = {
//   text: '#222222',
//   text50: '#22222233',
//   title: '#000000',
//   title50: '#00000033',
//   primary: '#F0F2F5',
//   secondary: '#FFFFFF',
//   gray: '#999999',
// }

// const darkColors = {
//   text: '#F0F2F5',
//   text50: '#F0F2F533',
//   title: '#FFFFFF',
//   title50: '#FFFFFF33',
//   primary: '#111111',
//   secondary: '#222222',
//   gray: '#DDDDDD',
// }

// const light: ThemeType = {
//   fonts,
//   colors: { ...commonColors, ...lightColors } as ThemeType['colors'],
// }

// const dark: ThemeType = {
//   fonts,
//   colors: { ...commonColors, ...darkColors } as ThemeType['colors'],
// }

// export default { dark, light }

// /** referêcia de opacidade em cor hexadecimal;
// 100% — FF
// 95% — F2
// 90% — E6
// 85% — D9
// 80% — CC
// 75% — BF
// 70% — B3
// 65% — A6
// 60% — 99
// 55% — 8C
// 50% — 80
// 45% — 73
// 40% — 66
// 35% — 59
// 30% — 4D
// 25% — 40
// 20% — 33
// 15% — 26
// 10% — 1A
// 5% — 0D
// 0% — 00

// exemplo: branco opacidade 80% -> #FFFFFFCC
// */
