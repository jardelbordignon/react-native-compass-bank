import React, { useState } from 'react'

import { BorderlessBtn, Icon, Row, Txt } from 'src/components/atoms'
import { Container } from 'src/components/molecules'
import { formatPrice } from 'src/utils/formatters'

//import * as S from './styles'

type Props = {
  amount: number
}

export function BalanceInfo({ amount }: Props) {
  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <Container align="flex-start" p="16px" bgColor="background">
      <Row justify="flex-start">
        <Txt size={16} font="light" m="0 12px 0 0">
          Seu saldo
        </Txt>
        <BorderlessBtn onPress={toggleVisibility}>
          <Icon name={`eye${visible ? '-off' : ''}`} size={24} color="highlight" />
        </BorderlessBtn>
      </Row>
      <Txt size={32} color="highlight">
        {visible ? formatPrice(amount) : 'R$ *****'}
      </Txt>
    </Container>
  )
}
