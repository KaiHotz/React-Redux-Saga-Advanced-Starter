import { createAction } from '@/src/utils'
import { EXAMPLE } from './types'

export const exampleAction = {
  request: () => createAction(EXAMPLE.REQUEST, { fetching: true, success: false, error: null }),
  success: (data) => createAction(EXAMPLE.SUCCESS, { ...data, fetching: false, success: true, error: null }),
  failure: (error) => createAction(EXAMPLE.FAILURE, { ...error, fetching: false, success: false })
}
