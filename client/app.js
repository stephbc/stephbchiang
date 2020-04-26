import React from 'react'
import {Route, Switch, Link} from 'react-router-dom'
import {Banner, Home, Footer} from './components'

const App = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <Home /> */}

      <div>
        <Switch>
          {/* <Route exact path="/" component={Banner} /> */}
          <Route path="/home" component={Home} />
          <Route component={Banner} />
        </Switch>
      </div>

      <Footer />
    </div>
  )
}

export default App
