import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

export const Navbar = () => (
  <div className="navBar">
    {/* <h4>here's what i've been learning and creating</h4> */}
    <nav>
      {/* <Link to="/home">home</Link> */}
      <Link to="/portfolio">portfolio</Link>
      <Link to="/coding">learning to code</Link>
      <Link to="/ukulele">ukulele</Link>
      <Link to="/biking">like riding a bike</Link>
      <Link to="/reading">reading list</Link>

      {/* <Link to="/about">about me</Link> */}
    </nav>
    {/* <hr /> */}
  </div>
)

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// // export default connect(mapState, mapDispatch)(Navbar)

// /**
//  * PROP TYPES
//  */
// Navbar.propTypes = {
//   handleClick: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
