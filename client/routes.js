// import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import {withRouter, Route, Switch} from 'react-router-dom'
// import PropTypes from 'prop-types'
// import {Home, Coding, Portfolio, About, Contact, Sidebar, Goals} from './components'
// import {me} from './store'

// /**
//  * COMPONENT
//  */
// export class Routes extends Component {

//   render() {

//     return (
//       <div>
//         {/* Routes placed here are available to all visitors */}
//         <Route path="/home" component={Home} />
//         <Route path="/coding" component={Coding} />
//         <Route path="/portfolio" component={Portfolio} />
//         <Route path="/about" component={About} />
//         <Route path="/contact" component={Contact} />
//         <Route path="/sidebar" component={Sidebar} />
//         <Route path="/goals" component={Goals} />

//         <Route component={Home} />
//       </div>
//     )
//   }
// }

// /**
//  * CONTAINER
//  */
// // const mapState = state => {
// //   return {
// //     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
// //     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
// //     isLoggedIn: !!state.user.id
// //   }
// // }

// // const mapDispatch = dispatch => {
// //   return {
// //     loadInitialData() {
// //       dispatch(me())
// //     }
// //   }
// // }

// // The `withRouter` wrapper makes sure that updates are not blocked
// // when the url changes
// // export default withRouter(connect(null, mapDispatch)(Routes))

// // /**
// //  * PROP TYPES
// //  */
// // Routes.propTypes = {
// //   loadInitialData: PropTypes.func.isRequired,
// //   isLoggedIn: PropTypes.bool.isRequired
// // }
