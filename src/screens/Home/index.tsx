import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import * as S from './styles'

export function Home() {
  return (
    <S.Wrapper>
      <Icon name="home" size={24} />
      <S.Title>Title</S.Title>
      <S.Subtitle>Subtitle</S.Subtitle>
      <S.Paragraph>Paragraph</S.Paragraph>
    </S.Wrapper>
  )
}
