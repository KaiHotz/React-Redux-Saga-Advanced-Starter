import { createAction } from '@/src/utils'
import {
  API_FETCH,
  API_FETCH_ALL,
  API_SAVE,
  API_UPDATE,
  API_DELETE
} from './types'

export const actionFetchOne = {
  request: (id) => createAction(API_FETCH.REQUEST, { id, fetching: true, success: false, error: null }),
  success: (data) => createAction(API_FETCH.SUCCESS, { ...data, fetching: false, success: true, error: null }),
  failure: (error) => createAction(API_FETCH.FAILURE, { ...error, fetching: false, success: false })
}

export const actionFetchAll = {
  request: () => createAction(API_FETCH_ALL.REQUEST, { fetching: true, success: false, error: null }),
  success: (data) => createAction(API_FETCH_ALL.SUCCESS, { ...data, fetching: false, success: true, error: null }),
  failure: (error) => createAction(API_FETCH_ALL.FAILURE, { ...error, fetching: false, success: false })
}

export const actionSave = {
  save: (data) => createAction(API_SAVE.SAVE, { ...data, fetching: true, success: false, error: null }),
  success: (data) => createAction(API_SAVE.SUCCESS, { ...data, fetching: false, success: true, error: null }),
  failure: (error) => createAction(API_SAVE.FAILURE, { ...error, fetching: false, success: false })
}

export const actionUpdate = {
  upadte: (id, data) => createAction(API_UPDATE.UPDATE, { id, ...data, fetching: true, success: false, error: null }),
  success: (data) => createAction(API_UPDATE.SUCCESS, { ...data, fetching: false, success: true, error: null }),
  failure: (error) => createAction(API_UPDATE.FAILURE, { ...error, fetching: false, success: false })
}

export const actionDelete = {
  delete: (id) => createAction(API_DELETE.DELETE, { id, fetching: true, success: false, error: null }),
  success: (data) => createAction(API_DELETE.SUCCESS, { ...data, fetching: false, success: true, error: null }),
  failure: (error) => createAction(API_DELETE.FAILURE, { ...error, fetching: false, success: false })
}

