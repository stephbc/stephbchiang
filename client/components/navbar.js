import React from 'react'
import {Link, Switch, Route} from 'react-router-dom'
import {Contact} from './index'

export class Navbar extends React.Component {
  constructor() {
    super()
    // this.state = {
    //   ifClicked: false
    // }
  }

  render() {
    // console.log(this.state)
    return (
      <div className="navBar">
        <nav>
          <div id="navLink1">
            {/* <button type="button"></button> */}
            <Link to="/home/portfolio">PORTFOLIO</Link>
          </div>
          <div id="navLink2">
            <Link to="/home/coding">CODING</Link>
          </div>
          <div id="navLink3">
            <Link to="/home/resume">RESUME</Link>
          </div>
          <div id="navLink4">
            <Link to="/home/contact">CONTACT</Link>
          </div>
          <Switch>
            <Route path="/home/contact" component={Contact} />
          </Switch>
          {/* <div id="navLink4">
            <Link to="/home/fun">JUST FOR FUN</Link>
          </div> */}
        </nav>
      </div>
    )
  }
}
