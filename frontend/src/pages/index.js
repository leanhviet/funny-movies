// Libs
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Constants
import ROUTES from '../constants/routes'

// Screen
import Home from './Home'
import Share from './Share'
import Register from './Register'
import Login from './Login'
import NotFound from './NotFound'

// Split router
const AppRouter = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={`${ROUTES.SHARE}`} component={Share} />
    <Route path={`${ROUTES.REGISTER}`} component={Register} />
    <Route path={`${ROUTES.LOGIN}`} component={Login} />
    <Route component={NotFound} />
  </Switch>
)

export const App = () => (
  <Router>
    <AppRouter />
  </Router>
)

export default App
