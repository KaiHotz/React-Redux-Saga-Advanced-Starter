import { fork } from 'redux-saga/effects'
import watchExampleSaga from './exampleSaga'

export default function * rootSaga () {
  yield [
    fork(watchExampleSaga)
  ]
}
