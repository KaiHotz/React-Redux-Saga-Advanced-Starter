import { createSelector } from 'reselect'

const exampleState = (state) => state.get('exampleData')

const exampleSelector = () => createSelector(
  exampleState,
  (state) => {
    const data = state.get('data')
    return data ? data.toJS() : data
  }
)

const loadingSelector = () => createSelector(
  exampleState,
  (state) => {
    return state.get('loading')
  }
)

const errorSelector = () => createSelector(
  exampleState,
  (state) => {
    const error = state.get('error')
    return error ? error.toJS() : error
  }
)
export {
  exampleSelector,
  loadingSelector,
  errorSelector
}
