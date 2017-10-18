import { fromJS, List } from 'immutable'
import { API_GET_ONE } from '@/src/actions/types'

const initialState = fromJS({
  data: new List([]),
  loading: false,
  success: false,
  error: null
})

export default function exampleReducer (state = initialState, action) {
  switch (action.type) {
    case API_GET_ONE.REQUEST:
    case API_GET_ONE.SUCCESS:
    case API_GET_ONE.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}
