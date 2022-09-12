import React from 'react'

import { Row, Txt } from 'src/components/atoms'
import type { StatementItemType } from 'src/types/statement'

import * as S from './styles'

type Props = {
  data: StatementItemType
}

export function StatementListItem({ data }: Props) {
  return (
    <Row align="stretch">
      <S.Timeline>
        <S.VerticalLine />
        <S.PointWrapper>
          <S.Point />
        </S.PointWrapper>
      </S.Timeline>

      <S.Card>
        <Row>
          <Txt>{data.description}</Txt>
          {data.tType.startsWith('PIX') && (
            <S.OperationTypeWrapper>
              <Txt size={14} color="base">
                Pix
              </Txt>
            </S.OperationTypeWrapper>
          )}
        </Row>
        <Row m="4px 0 8px">
          <Txt size={14} color="gray">
            {data.from || data.to}
          </Txt>
          <Txt size={16} color="gray">
            11/09
          </Txt>
        </Row>
        <Txt color={data.from ? 'highlight' : 'warning'}>500,00</Txt>
      </S.Card>
    </Row>
  )
}
