import React, { PureComponent } from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import Swiper from '../../components/swiper/swiper'
import Ranklist from '../../components/ranklist/ranklist';
import './home.scss'

class Home extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Swiper/>
        <img style={{ height: '80px', width: '100%', margin: '10px 0 0 0' }}
             src={require('../../static/img/main/newsbelong.png')}
             alt=""/>
        <Ranklist/>
      </div>
    )
  }
}

export default Home
