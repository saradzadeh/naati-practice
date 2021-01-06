import React, { component } from 'react'

import {HashRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

  import Signup from './Signup'
  import Login from './Login'
  import Dashboard from './Dashboard'
  import About from './About'
  import Contact from './Contact'
  import Home from './Home'
  



class Landing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                
                    <Switch>
                    <Route path= "/cv">
                        <Resume />
                    </Route>

                    <Route path= "/about">
                        <About />
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/projects">
                        <Projects />
                    </Route>
                    
                    </Switch>
                        
                </div>
            </Router>
        )
    }
}

export default Landing