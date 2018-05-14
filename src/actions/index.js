import { createAction } from '@/utils'
import {
  ITEM
} from './types'

export const item = {
  request: () => createAction(ITEM.GET, { loading: true, success: false, error: null }),
  requestOne: (id) => createAction(ITEM.GET_ONE, { id, loading: true, success: false, error: null }),
  save: (data) => createAction(ITEM.SAVE, { ...data, loading: true, success: false, error: null }),
  put: (id, data) => createAction(ITEM.PUT, { id, ...data, loading: true, success: false, error: null }),
  patch: (id, data) => createAction(ITEM.PATCH, { id, ...data, loading: true, success: false, error: null }),
  delete: (id) => createAction(ITEM.DELETE, { id, loading: true, success: false, error: null }),
  success: (data) => createAction(ITEM.SUCCESS, { ...data, loading: false, success: true, error: null }),
  failure: (error) => createAction(ITEM.FAILURE, { ...error, loading: false, success: false })
}
