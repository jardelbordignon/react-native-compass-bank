export type GetBalanceResponseType = {
  amount: number
}

export type StatementItemType = {
  id: string
  tType: string
  amount: number
  authentication?: string
  to?: string
  from?: string
  bankName?: string
  description: string
  createdAt: string
}

export type GetStatementResponseType = {
  items: StatementItemType[]
}
