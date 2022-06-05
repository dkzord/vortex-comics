import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Characters from './pages/Characters/Characters';
import Creator from './pages/Creator/Creator';
import HomePage from './pages/HomePage/HomePage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/creator">
        <Creator />
      </Route>
      <Route exact path="/characters">
        <Characters />
      </Route>
    </Switch>
  )
}

export default Routes