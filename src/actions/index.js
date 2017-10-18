import { createAction } from '@/src/utils'
import {
  API_GET,
  API_GET_ONE,
  API_POST,
  API_PUT,
  API_PATCH,
  API_DELETE
} from './types'

export const actionGet = {
  request: () => createAction(API_GET.REQUEST, { loading: true, success: false, error: null }),
  success: (data) => createAction(API_GET.SUCCESS, { ...data, loading: false, success: true, error: null }),
  failure: (error) => createAction(API_GET.FAILURE, { ...error, loading: false, success: false })
}

export const actionGetOne = {
  request: (id) => createAction(API_GET_ONE.REQUEST, { id, loading: true, success: false, error: null }),
  success: (data) => createAction(API_GET_ONE.SUCCESS, { ...data, loading: false, success: true, error: null }),
  failure: (error) => createAction(API_GET_ONE.FAILURE, { ...error, loading: false, success: false })
}

export const actionPost = {
  save: (data) => createAction(API_POST.SAVE, { ...data, loading: true, success: false, error: null }),
  success: (data) => createAction(API_POST.SUCCESS, { ...data, loading: false, success: true, error: null }),
  failure: (error) => createAction(API_POST.FAILURE, { ...error, loading: false, success: false })
}

export const actionPut = {
  upadte: (id, data) => createAction(API_PUT.UPDATE, { id, ...data, loading: true, success: false, error: null }),
  success: (data) => createAction(API_PUT.SUCCESS, { ...data, loading: false, success: true, error: null }),
  failure: (error) => createAction(API_PUT.FAILURE, { ...error, loading: false, success: false })
}

export const actionPatch = {
  upadte: (id, data) => createAction(API_PATCH.UPDATE, { id, ...data, loading: true, success: false, error: null }),
  success: (data) => createAction(API_PATCH.SUCCESS, { ...data, loading: false, success: true, error: null }),
  failure: (error) => createAction(API_PATCH.FAILURE, { ...error, loading: false, success: false })
}

export const actionDelete = {
  delete: (id) => createAction(API_DELETE.DELETE, { id, loading: true, success: false, error: null }),
  success: (data) => createAction(API_DELETE.SUCCESS, { ...data, loading: false, success: true, error: null }),
  failure: (error) => createAction(API_DELETE.FAILURE, { ...error, loading: false, success: false })
}
