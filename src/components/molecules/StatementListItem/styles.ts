import styled from 'styled-components/native'

export const Timeline = styled.View`
  justify-content: center;
  align-items: center;
  width: 10px;
  position: relative;
`

export const VerticalLine = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  position: absolute;
`

export const PointWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.base};
  padding: 5px;
`

export const Point = styled.View`
  width: 11px;
  height: 11px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.highlight};
`

export const Card = styled.View`
  padding: 16px 0 16px 8px;
  width: 95%;
`

export const OperationTypeWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.highlight};
  height: 20px;
  width: 48px;
  justify-content: center;
  align-items: center;
`

export const Header = styled.View``

export const Info = styled.View``
