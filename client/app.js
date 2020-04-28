import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Banner, Home, Footer} from './components'

const App = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route component={Banner} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default App
