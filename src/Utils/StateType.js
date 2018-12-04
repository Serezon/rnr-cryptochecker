//@flow
export type CoinType = {
  name: string,
  symbol: string,
  quote: {
    USD: {
      price: number,
      percent_change_24h: number,
      percent_change_7d: number
    }
  }
}

export type InitialStateType = {|
  +isFetching: boolean,
  +data: Array<CoinType>,
  +hasError: boolean,
  +errorMessage: any
|}

export type State = {
  crypto: InitialStateType
}