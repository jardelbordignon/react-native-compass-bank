import type {
  GetBalanceResponseType,
  GetStatementResponseType,
  StatementItemType,
} from 'src/types/statement'

import { api } from '.'

class StatementApi {
  public async getBalance() {
    return api.get<GetBalanceResponseType>('myBalance')
  }

  public async getStatement(limit: number, offset: number) {
    return api.get<GetStatementResponseType>(`myStatement/${limit}/${offset}`)
  }

  public async getStatementItem(id: string) {
    return api.get<StatementItemType>(`myStatement/detail/${id}`)
  }
}

export const statementApi = new StatementApi()
