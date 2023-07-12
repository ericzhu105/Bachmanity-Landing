import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Portfolio from './views/portfolio'
import Team from './views/team'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Team} exact path="/team" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
