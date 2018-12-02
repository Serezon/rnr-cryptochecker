import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import logger from 'redux-logger'

import RootReducer from './Reducers'

const middleware = applyMiddleware(thunk, promise, logger)

const Store = createStore(
  RootReducer,
  middleware
)

export default Store