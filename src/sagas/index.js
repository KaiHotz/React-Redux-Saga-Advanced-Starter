import { all, fork } from 'redux-saga/effects'
import watchExampleSagas from './exampleSagas'

export default function* rootSaga() {
  yield all([
    fork(watchExampleSagas),
  ])
}
