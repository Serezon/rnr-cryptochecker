//@flow
import { combineReducers } from 'redux'
import CryptoReducer from './CryptoReducer'
import type { ActionType } from '../Utils/ActionTypes.js'

export default combineReducers<*, ActionType>({
  crypto: CryptoReducer
})