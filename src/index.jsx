import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import rootSaga from './sagas'
import configureStore from './store'
import App from './App'

import './styles/styles.scss'

const initialState = {}
const history = createBrowserHistory()
const store = configureStore(initialState, history)
store.runSaga(rootSaga)

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Component />
      </ConnectedRouter>
    </Provider>,
    document.querySelector('.container'),
  )
}

render(App)

if (module.hot) {
  module.hot.accept(
    './App',
    () => {
      // eslint-disable-next-line
      const App = require('./App').default
      render(App)
    },
  )
}
