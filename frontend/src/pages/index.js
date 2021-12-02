// Libs
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Constants
import ROUTES from '../constants/routes'

// Screen
import Home from './Home'
import Share from './Share'

// Components
import Header from '../components/Header'

// Split router
const AppRouter = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={`${ROUTES.SHARE}`} component={Share} />
  </Switch>
)

const App = () => (
  <Router>
    <Header />
    <AppRouter />
  </Router>
)

export default App
