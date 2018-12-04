//@flow
import { apiBaseUrl } from '../Utils/Constants'
import type { 
  FetchingCoinDataType,
  Dispatch
} from '../Utils/ActionTypes'

const FetchCoinDataAction = (): FetchingCoinDataType => ({
  type: 'FETCHING_COIN_DATA'
})

export default function FetchCoinData() {
  return (dispatch: Dispatch) => {

    dispatch(FetchCoinDataAction())

    const fetchData = {
      method: 'GET',
      headers: new Headers({
        'X-CMC_PRO_API_KEY': '2ea6c036-4bda-4a64-b8b9-1b24ca59e6d3',
        'Content-Type': 'application/json'
      })
    }

    return fetch(`${apiBaseUrl}/v1/cryptocurrency/listings/latest?limit=10`, fetchData)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: 'FETCHING_COIN_DATA_SUCCESS', payload: res.data })
      })
      .catch(err => {
        dispatch({ type: 'FETCHING_COIN_DATA_FAIL', payload: err })
      })
  }
}