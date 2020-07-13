import React from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      clickedComponent: ''
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="navBar">
        <nav>
          <div id="navLink1">
            {/* <button type="button"></button> */}
            <Link
              to="/home/portfolio"
              onClick={() => this.setState({clickedComponent: 'portfolio'})}
            >
              PORTFOLIO
            </Link>
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
          {/* <div id="navLink4">
            <Link to="/home/fun">JUST FOR FUN</Link>
          </div> */}
        </nav>
      </div>
    )
  }
}
