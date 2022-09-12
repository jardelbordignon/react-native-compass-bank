import { FlatList, FlatListProps } from 'react-native'
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper'
import styled from 'styled-components/native'

import type { StatementItemType } from 'src/types/statement'

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.base};
  flex: 1;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: ${getStatusBarHeight()}px;
  padding: 16px 0;
  width: 100%;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 32px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 24px;
`

export const Paragraph = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.light};
  font-size: 16px;
`

export const StatementFlatList = styled(
  FlatList as new (props: FlatListProps<StatementItemType>) => FlatList<StatementItemType>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingTop: 20,
    paddingBottom: getBottomSpace() + 20,
  },
})`
  width: 100%;
`
