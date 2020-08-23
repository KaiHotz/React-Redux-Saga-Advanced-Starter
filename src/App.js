import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ExampleComponent } from './components/ExampleComponent'
import ExampleContainer from './containers/ExampleContainer'

export const App = () => (
  <Switch>
    <Route exact path="/" component={ExampleContainer} />
    <Route exact path="/exampleComponent" component={ExampleComponent} />
  </Switch>
)
