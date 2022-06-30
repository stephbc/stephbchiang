import React from 'react'
import {Link, Route, Switch} from 'react-router-dom'
import {Contact} from './index'
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAnglesDown, faAnglesRight} from '@fortawesome/free-solid-svg-icons'

fontawesome.library.add(faAnglesDown, faAnglesRight)

export const BannerGreeting = () => {
  return (
    <div>
      <div id="bannerG1">
        <Link to="/home">
          <span>get to know me and my work </span>
          <FontAwesomeIcon icon="angles-right" />
        </Link>
      </div>
      <div id="bannerG2">
        <Link to="/contact">
          <span>or just say hello </span>
          <FontAwesomeIcon icon="angles-down" />
        </Link>
        <Switch>
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </div>
  )
}
