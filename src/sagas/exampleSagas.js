import { put, call, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import {
  API_GET,
  API_GET_ONE,
  API_POST,
  API_PUT,
  API_PATCH,
  API_DELETE
} from '@/src/actions/types'

import {
  actionGet,
  actionGetOne,
  actionPost,
  actionPut,
  actionPatch,
  actionDelete
} from '@/src/actions'

function * handleGet (action) {
  try {
    const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts/')
    yield put(actionGet.success({ data }))
  } catch (e) {
    yield put(actionGet.failure({ error: { ...e } }))
  }
}

function * handleGetOne (action) {
  try {
    const { id } = action.payload
    const { data } = yield call(axios.get, `https://jsonplaceholder.typicode.com/posts/${id}`)
    yield put(actionGetOne.success({ data }))
  } catch (e) {
    yield put(actionGetOne.failure({ error: { ...e } }))
  }
}

function * handlePost (action) {
  try {
    const { saveData } = action.payload
    const { data } = yield call(axios.post, 'https://jsonplaceholder.typicode.com/posts/', { saveData })
    yield put(actionPost.success({ data }))
  } catch (e) {
    yield put(actionPost.failure({ error: { ...e } }))
  }
}

function * handlePut (action) {
  try {
    const { id, updateData } = action.payload
    const { data } = yield call(axios.put, `https://jsonplaceholder.typicode.com/posts/${id}`, { updateData })
    yield put(actionPut.success({ data }))
  } catch (e) {
    yield put(actionPut.failure({ error: { ...e } }))
  }
}

function * handlePatch (action) {
  try {
    const { id, updateData } = action.payload
    const { data } = yield call(axios.patch, `https://jsonplaceholder.typicode.com/posts/${id}`, { updateData })
    yield put(actionPatch.success({ data }))
  } catch (e) {
    yield put(actionPatch.failure({ error: { ...e } }))
  }
}

function * handleDelete (action) {
  try {
    const { id } = action.payload
    const { data } = yield call(axios.delete, `https://jsonplaceholder.typicode.com/posts/${id}`)
    yield put(actionDelete.success({ data }))
  } catch (e) {
    yield put(actionDelete.failure({ error: { ...e } }))
  }
}

function * watchExampleSagas () {
  yield [
    takeLatest(API_GET.REQUEST, handleGet),
    takeLatest(API_GET_ONE.REQUEST, handleGetOne),
    takeLatest(API_POST.SAVE, handlePost),
    takeLatest(API_PUT.UPDATE, handlePut),
    takeLatest(API_PATCH.UPDATE, handlePatch),
    takeLatest(API_DELETE.DELETE, handleDelete)
  ]
}

export default watchExampleSagas
