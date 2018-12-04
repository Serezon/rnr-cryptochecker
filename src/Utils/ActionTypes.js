//@flow
import type { Dispatch as ReduxDispatch } from 'redux'

export type FetchingCoinDataType = {
  type: 'FETCHING_COIN_DATA'
}

export type FetchingCoinDataSuccessType = {
  type: 'FETCHING_COIN_DATA_SUCCESS',
  payload: any
}

export type FetchingCoinDataFailType = {
  type: 'FETCHING_COIN_DATA_FAIL',
  payload: any
}

export type ActionType = 
  | FetchingCoinDataType
  | FetchingCoinDataSuccessType
  | FetchingCoinDataFailType

export type Dispatch = ReduxDispatch<ActionType>