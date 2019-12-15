import { fromJS } from 'immutable'
import { compose, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from './reducers'

const sagaMiddleware = createSagaMiddleware()

const configureStore = (initialState = {}, history) => {
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose

  const middlewares = [
    sagaMiddleware,
  ]

  const enhancers = [
    applyMiddleware(...middlewares),
  ]

  const store = createStore(
    rootReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers),
  )

  store.runSaga = sagaMiddleware.run
  store.asyncReducers = {}
  store.close = () => store.dispatch(END)

  if (module.hot) {
    // Enable webpack hot module replacement for reducers
    module.hot.accept(
      './reducers',
      () => {
        import('./reducers').then(reducerModule => {
          const createReducers = reducerModule.default
          const nextReducers = createReducers(store.asyncReducers)
          store.replaceReducer(nextReducers)
        })
      },
    )
  }

  return store
}

export default configureStore
