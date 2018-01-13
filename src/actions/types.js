import { createActionTypes } from '@/src/utils'

export const ITEM = createActionTypes('ITEM', [
  'GET',
  'GET_ONE',
  'SAVE',
  'UPDATE',
  'DELETE',
  'SUCCESS',
  'FAILURE'
])
