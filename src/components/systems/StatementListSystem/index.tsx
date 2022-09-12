import React, { useDeferredValue, useEffect, useState } from 'react'

import { statementApi } from 'src/api/statement'
import { LoadingIndicator, Txt } from 'src/components/atoms'
import { BalanceInfo, Container, StatementListItem } from 'src/components/molecules'
import { StatementItemType } from 'src/types/statement'

import * as S from './styles'

const balance = {
  amount: 1345,
}

const statementItems = [
  {
    id: 'E79E0C9A-46AE-4DBA-82F5-D0BACC53F6CF',
    tType: 'TRANSFEROUT',
    amount: 1807,
    to: 'Simba Bond',
    description: 'Transferência realizada',
    createdAt: '2020-10-22T03:00:00Z',
  },
  {
    amount: 1615,
    id: '49E27207-F3A7-4264-B021-0188690F7D43',
    authentication: '15BA0BB3-EFDB-44E9-99BA-3D0F8725C0E3',
    tType: 'PIXCASHIN',
    createdAt: '2020-11-19T03:00:00Z',
    to: 'Karen Amidala',
    description: 'Transferência PIX recebida',
  },
  {
    id: '241A26A1-B2AF-4C94-94FE-45EAD7C52BF4',
    tType: 'TRANSFERIN',
    amount: 1479,
    to: 'Larry Windu',
    description: 'Transferência recebida',
    createdAt: '2020-10-16T03:00:00Z',
  },
  {
    id: '0244F0E3-DBFF-4C80-A388-33C13C87529C',
    tType: 'TRANSFERIN',
    amount: 1565,
    from: 'Arthur Hunt',
    bankName: 'Bank XPTO',
    description: 'Transferência recebida',
    createdAt: '2020-10-11T03:00:00Z',
  },
]

export function StatementListSystem() {
  const [statementData, setStatementData] = useState<StatementItemType[]>(statementItems)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)
  const limit = 10
  const statementCount = useDeferredValue(statementData.length)

  const loadStatement = async () => {
    const {
      data: { items },
    } = await statementApi.getStatement(page, limit)

    if (items) {
      const data = page === 0 ? items : [...statementData, ...items]
      setStatementData(data)
      //if (statementCount === totalResults) setHasMore(false)
    }
  }

  const onEndReached = () => {
    if (hasMore) setPage(page + 1)
  }

  useEffect(() => {
    //  loadStatement()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <S.Wrapper>
      <S.Header>
        <Txt size={24} font="bold">
          Extrato
        </Txt>
      </S.Header>

      <BalanceInfo amount={balance.amount} />

      <Container loading={!statementData} align="flex-start" p="16px">
        <Txt size={16} font="bold">
          Suas movimentações
        </Txt>

        <S.StatementFlatList
          data={statementData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <StatementListItem data={item} />}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          ListFooterComponent={hasMore ? LoadingIndicator : undefined}
        />
      </Container>
    </S.Wrapper>
  )
}
