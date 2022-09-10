import styled from 'styled-components/native'

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 30px;
`
