import { createActionTypes } from '@/src/utils'

export const API_GET = createActionTypes('API_GET', [
  'REQUEST',
  'SUCCESS',
  'FAILURE']
)

export const API_GET_ONE = createActionTypes('API_GET_ONE', [
  'REQUEST',
  'SUCCESS',
  'FAILURE']
)

export const API_POST = createActionTypes('API_POST', [
  'SAVE',
  'SUCCESS',
  'FAILURE']
)

export const API_PUT = createActionTypes('API_PUT', [
  'UPDATE',
  'SUCCESS',
  'FAILURE']
)

export const API_PATCH = createActionTypes('API_PATCH', [
  'UPDATE',
  'SUCCESS',
  'FAILURE']
)

export const API_DELETE = createActionTypes('API_DELETE', [
  'DELETE',
  'SUCCESS',
  'FAILURE']
)
