import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { createBrowserHistory } from 'history'

import * as serviceWorker from './serviceWorker'

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
    document.getElementById('root'),
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
