import React from 'react'
import {BannerGreeting} from './index'

export class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="bannerGreeting">
          <BannerGreeting />
        </div>
        <div className="bannerIntro">
          <h1>hi, i'm stephanie</h1>
        </div>
      </div>
    )
  }
}
