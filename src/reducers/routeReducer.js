import { fromJS } from 'immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

const routeInitialState = fromJS({
  location: null,
})

const routeReducer = (state = routeInitialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload,
      })
    default:
      return state
  }
}

export default routeReducer
