// In case you need to use a selector
// import also select from redux-saga/effects
// and then simplie yield select(yourSelector())
//
// In case you need to redirect to whatever route
// import { push } from react-router-redux and then
// yield put(push('/next-page'))

import { put, call, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios'

import {
  ITEM
} from '@/src/actions/types'

import {
  item
} from '@/src/actions'

function * handleGet () {
  try {
    const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts/')
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function * handleGetOne (action) {
  try {
    const { id } = action.payload
    const { data } = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts/${id}`)
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function * handlePost (action) {
  try {
    const { saveData } = action.payload
    const { data } = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts/', { saveData })
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function * handlePut (action) {
  try {
    const { id, updateData } = action.payload
    const { data } = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${id}`, { updateData })
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function * handlePatch (action) {
  try {
    const { id, updateData } = action.payload
    const { data } = yield call(axios.patch, `https://jsonplaceholder.typicode.com/posts/${id}`, { updateData })
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function * handleDelete (action) {
  try {
    const { id } = action.payload
    const { data } = yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${id}`)
    yield put(item.success({ data }))
  } catch (e) {
    yield put(item.failure({ error: { ...e } }))
  }
}

function * watchExampleSagas () {
  yield all([
    takeLatest(ITEM.GET, handleGet),
    takeLatest(ITEM.GET_ONE, handleGetOne),
    takeLatest(ITEM.SAVE, handlePost),
    takeLatest(ITEM.PUT, handlePut),
    takeLatest(ITEM.PATCH, handlePatch),
    takeLatest(ITEM.DELETE, handleDelete)
  ])
}

export default watchExampleSagas
