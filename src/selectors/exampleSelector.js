import { createSelector } from 'reselect'

const exampleState = state => state.get('exampleData')

const exampleDataSelector = () => createSelector(
  exampleState,
  state => {
    const data = state.get('data')
    return data ? data.toJS() : data
  },
)

const fetchingSelector = () => createSelector(
  exampleState,
  state => state.get('fetching'),
)

const errorSelector = () => createSelector(
  exampleState,
  state => {
    const error = state.get('error')
    return error ? error.toJS() : error
  },
)
export {
  exampleDataSelector,
  fetchingSelector,
  errorSelector,
}
