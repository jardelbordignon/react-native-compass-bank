import React, { ReactNode } from 'react'

import { LoadingIndicator } from 'src/components/atoms'

import { Wrapper, WrapperProps } from './styles'

type Props = WrapperProps & {
  children: ReactNode
  loading?: boolean
}

export function Container({ children, loading, justify, align, p, bgColor }: Props) {
  if (loading) {
    return (
      <Wrapper justify="center" align="center" bgColor={bgColor}>
        <LoadingIndicator size="large" />
      </Wrapper>
    )
  }

  return (
    <Wrapper justify={justify} align={align} p={p} bgColor={bgColor}>
      {children}
    </Wrapper>
  )
}
