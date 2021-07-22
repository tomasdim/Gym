import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import exercises from './reducers/exercises'

const middleware = [thunkMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({ exercises }),
  composeEnhancers(applyMiddleware(...middleware))
)

export default store
