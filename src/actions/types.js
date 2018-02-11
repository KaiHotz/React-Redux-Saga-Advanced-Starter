import { createActionTypes } from '@/src/utils'

export const ITEM = createActionTypes('ITEM', [
  'GET',
  'GET_ONE',
  'SAVE',
  'PUT',
  'PATCH',
  'DELETE',
  'SUCCESS',
  'FAILURE'
])
