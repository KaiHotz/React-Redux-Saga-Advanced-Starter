import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  API_FETCH,
  API_FETCH_ALL,
  API_SAVE,
  API_UPDATE,
  API_DELETE
} from '@/src/actions/types'

import {
  actionFetchOne,
  actionFetchAll,
  actionSave,
  actionUpdate,
  actionDelete
} from '@/src/actions'

function * handleFetchOne (action) {
  try {
    const {id} = action.payload
    const { data } = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts/${id}`)
    yield put(actionFetchOne.success({ data }))
  } catch (e) {
    yield put(actionFetchOne.failure({ error: { ...e } }))
  }
}

function * handleFetchAll (action) {
  try {
    const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts/')
    yield put(actionFetchAll.success({ data }))
  } catch (e) {
    yield put(actionFetchAll.failure({ error: { ...e } }))
  }
}

function * handleSave (action) {
  try {
    const { saveData } = action.payload;
    const { data } = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts/', { saveData })
    yield put(actionSave.success({ data }))
  } catch (e) {
    yield put(actionSave.failure({ error: { ...e } }))
  }
}

function * handleUpdate (action) {
  try {
    const { id, updateData } = action.payload;
    const { data } = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${id}`, { updateData })
    yield put(actionUpdate.success({ data }))
  } catch (e) {
    yield put(actionUpdate.failure({ error: { ...e } }))
  }
}

function * handleDelete (action) {
  try {
    const {id} = action.payload
    const { data } = yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${id}`)
    yield put(actionDelete.success({ data }))
  } catch (e) {
    yield put(actionDelete.failure({ error: { ...e } }))
  }
}

function * watchExampleSaga () {
  yield [
    takeLatest(API_FETCH.REQUEST, handleFetchOne),
    takeLatest(API_FETCH_ALL.REQUEST, actionFetchAll),
    takeLatest(API_SAVE.SAVE, handleSave),
    takeLatest(API_UPDATE.UPDATE, handleUpdate),
    takeLatest(API_DELETE.DELETE, handleDelete)
  ]
}

export default watchExampleSaga
