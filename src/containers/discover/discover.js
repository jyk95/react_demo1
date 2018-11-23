import React, { PureComponent } from 'react'
import Swiper from '../../components/swiper/swiper'
import './discover.scss'

class Discover extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Swiper/>
        <div className="article">
          <div/>
          <span>文章</span>
        </div>
      </div>
    )
  }
}

export default Discover
