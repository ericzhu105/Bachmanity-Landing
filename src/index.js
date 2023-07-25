import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Portfolio from './views/portfolio'
import Team from './views/team'
import Elam from './views/team/elam'
import Eric from './views/team/eric'
import Chuck from './views/team/chuck'
import Kris from './views/team/kris'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Team} exact path="/team" />
        <Route component={Elam} exact path="/investors/Christian-Elam" />
        <Route component={Eric} exact path="/investors/Eric-Zhu" />
        <Route component={Chuck} exact path="/investors/Chuck-Figueroa" />
        <Route component={Kris} exact path="/investors/Kristin-Stueben" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
