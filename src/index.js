import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Portfolio from './views/portfolio'
import Team from './views/team'
import LP from './views/lp'

import teamData from './views/team/teamData'
import TeamInfoPage from './views/team/teamInfoPage'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Team} exact path="/team" />
        {teamData.map((teamMember) => {
          return (
            <Route
              component={() => <TeamInfoPage name={teamMember.name} title={teamMember.title} bio={teamMember.bio} image={teamMember.image} twitter={teamMember.twitter} linkedin={teamMember.linkedin}                
                />}
              exact
              path={teamMember.slug}
            />
          )
        })}
        <Route component={LP} exact path="/lp" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
