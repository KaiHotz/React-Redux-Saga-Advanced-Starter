import { createActionTypes } from '@/src/utils'

export const EXAMPLE = createActionTypes('EXAMPLE', [
  'REQUEST',
  'SUCCESS',
  'FAILURE']
)
