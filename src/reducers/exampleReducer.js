import { fromJS, List } from 'immutable'
import { API_FETCH } from '@/src/actions/types'

const initialState = fromJS({
  data: new List([]),
  fetching: false,
  success: false,
  error: null
})

export default function exampleReducer (state = initialState, action) {
  switch (action.type) {
    case API_FETCH.REQUEST:
    case API_FETCH.SUCCESS:
    case API_FETCH.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}
