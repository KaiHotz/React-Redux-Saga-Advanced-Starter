import React, { Component } from 'react'
import { compose } from 'recompose'
import { Route, Switch, withRouter } from 'react-router-dom'
import ExampleComponent from '@/components/ExampleComponent'
import ExampleContainer from '@/containers/ExampleContainer'
import WithErrors from '@/hocs/WithErrors'

class App extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/exampleComponent' component={ExampleComponent} />
        <Route exact path='/' component={ExampleContainer} />
      </Switch>
    )
  }
}

export default compose(
  withRouter,
  WithErrors
)(App)
