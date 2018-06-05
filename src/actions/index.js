import { createAction } from '../utils'
import { ITEM } from './types'

export const item = {
  request: () => createAction(ITEM.GET, { fetching: true, success: false, error: null }),
  requestOne: id => createAction(ITEM.GET_ONE, {
    id, fetching: true, success: false, error: null,
  }),
  save: data => createAction(ITEM.SAVE, {
    ...data, fetching: true, success: false, error: null,
  }),
  put: (id, data) => createAction(ITEM.PUT, {
    id, ...data, fetching: true, success: false, error: null,
  }),
  patch: (id, data) => createAction(ITEM.PATCH, {
    id, ...data, fetching: true, success: false, error: null,
  }),
  delete: id => createAction(ITEM.DELETE, {
    id, fetching: true, success: false, error: null,
  }),
  success: data => createAction(ITEM.SUCCESS, {
    ...data, fetching: false, success: true, error: null,
  }),
  failure: error => createAction(ITEM.FAILURE, { ...error, fetching: false, success: false }),
}

export default item
