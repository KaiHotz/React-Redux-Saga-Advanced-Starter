import { fromJS, List } from 'immutable'
import { EXAMPLE } from '@/src/actions/types'

const initialState = fromJS({
  data: new List([]),
  fetching: false,
  success: false,
  error: null
})

export default function exampleReducer (state = initialState, action) {
  switch (action.type) {
    case EXAMPLE.REQUEST:
    case EXAMPLE.SUCCESS:
    case EXAMPLE.FAILURE:
      return state.merge(action.payload)
    default:
      return state
  }
}
