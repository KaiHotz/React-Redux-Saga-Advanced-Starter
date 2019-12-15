import { combineReducers } from 'redux-immutable'
import exampleReducer from './exampleReducer'

const rootReducer = asyncReducers => combineReducers({
  exampleData: exampleReducer,
  ...asyncReducers,
})

export default rootReducer
