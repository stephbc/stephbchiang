import React from 'react'
import {Link} from 'react-router-dom'
import {Contact} from './index'

export class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      ifClicked: false
    }
  }

  render() {
    if (this.state.ifClicked) {
      return (
        <div className="navBar">
          <nav>
            <div id="navLink1">
              <Link to="/home/portfolio">PORTFOLIO</Link>
            </div>
            <div id="navLink2">
              <Link to="/home/coding">CODING</Link>
            </div>
            <div id="navLink3">
              <Link to="/home/resume">RESUME</Link>
            </div>
            <div id="navLink4">
              <a onClick={() => this.setState({ifClicked: true})}>CONTACT</a>
              <Contact />
            </div>
          </nav>
        </div>
      )
    } else {
      return (
        <div className="navBar">
          <nav>
            <div id="navLink1">
              <Link to="/home/portfolio">PORTFOLIO</Link>
            </div>
            <div id="navLink2">
              <Link to="/home/coding">CODING</Link>
            </div>
            <div id="navLink3">
              <Link to="/home/resume">RESUME</Link>
            </div>
            <div id="navLink4">
              <a onClick={() => this.setState({ifClicked: true})}>CONTACT</a>
            </div>
          </nav>
        </div>
      )
    }
  }
}
