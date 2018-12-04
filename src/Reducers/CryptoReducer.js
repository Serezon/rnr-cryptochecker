//@flow
import type { 
  FetchingCoinDataType,
  FetchingCoinDataSuccessType,
  FetchingCoinDataFailType,
  ActionType
} from '../Utils/ActionTypes'

import type { InitialStateType } from '../Utils/StateType'

const initialState = {
  isFetching: false,
  data: [],
  hasError: false,
  errorMessage: null
}

export default (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
  switch (action.type) {
    case 'FETCHING_COIN_DATA':
      return {
        ...state,
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null
      }

    case 'FETCHING_COIN_DATA_SUCCESS':
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }

    case 'FETCHING_COIN_DATA_FAIL':
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.payload
      }

    default:
      return { ...state }

  }
}