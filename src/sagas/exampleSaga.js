import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { EXAMPLE } from '@/src/actions/types'
import { exampleAction } from '@/src/actions'

function * handleFetch (action) {
  try {
    const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts/1')
    yield put(exampleAction.success({ data }))
  } catch (e) {
    yield put(exampleAction.failure({ error: { ...e } }))
  }
}

function * watchExampleSaga () {
  yield [
    takeLatest(EXAMPLE.REQUEST, handleFetch)
  ]
}

export default watchExampleSaga
