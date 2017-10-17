import { combineReducers } from 'redux-immutable'
import routeReducer from './routeReducer'
import exampleReducer from './exampleReducer'

const rootReducer = asyncReducers => {
  return combineReducers({
    route: routeReducer,
    exampleData: exampleReducer,
    ...asyncReducers
  })
}

export default rootReducer
