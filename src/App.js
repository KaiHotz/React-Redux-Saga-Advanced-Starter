import React from 'react'
import { compose } from 'recompose'
import { Route, Switch, withRouter } from 'react-router-dom'
import WithErrors from './hocs/WithErrors'
import ExampleComponent from './components/ExampleComponent'
import ExampleContainer from './containers/ExampleContainer'

const App = () => (
  <Switch>
    <Route exact path="/exampleComponent" component={ExampleComponent} />
    <Route exact path="/" component={ExampleContainer} />
  </Switch>
)

export default compose(
  WithErrors,
  withRouter,
)(App)
