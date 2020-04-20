import React from 'react'

import {Navbar, Banner, Home, Footer} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      {/* <Routes /> */}
      <Home />
      <Footer />
    </div>
  )
}

export default App
