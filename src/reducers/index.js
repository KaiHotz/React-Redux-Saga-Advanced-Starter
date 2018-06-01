import { combineReducers } from 'redux-immutable'
import routeReducer from './routeReducer'
import exampleReducer from './exampleReducer'

const rootReducer = asyncReducers => combineReducers({
  route: routeReducer,
  exampleData: exampleReducer,
  ...asyncReducers,
})

export default rootReducer
