import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import ReviewReducer from './reducers/ReviewReducer'

const store = createStore(
  combineReducers({
    reviewState: ReviewReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store