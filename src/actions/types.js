import { createActionTypes } from '@/src/utils'

export const API_FETCH = createActionTypes('API_FETCH', [
  'REQUEST',
  'SUCCESS',
  'FAILURE']
)

export const API_FETCH_ALL = createActionTypes('API_FETCH_ALL', [
  'REQUEST',
  'SUCCESS',
  'FAILURE']
)

export const API_SAVE = createActionTypes('API_SAVE', [
  'SAVE',
  'SUCCESS',
  'FAILURE']
)

export const API_UPDATE = createActionTypes('API_UPDATE', [
  'UPDATE',
  'SUCCESS',
  'FAILURE']
)

export const API_DELETE = createActionTypes('API_DELETE', [
  'DELETE',
  'SUCCESS',
  'FAILURE']
)
