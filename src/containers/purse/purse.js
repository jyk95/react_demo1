import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'qs'
import { apiPath } from '../../static/js/common';
import { Toast } from 'antd-mobile'
import Topbar from '../../components/topbar/topbar'
import PurseItem from './component/purseItem'
import './purse.scss'

class Purse extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      purseData: [],
      windowHeight: ''
    }
  }
  render () {
    const data = this.state.purseData
    if (data.length === 0) {
      return (
        <div>
          <Topbar kind={'1'} title={'我的钱包'} ifImg={true}/>
        <div className="nopurse" style={{ height: this.state.windowHeight - 40 }}>
          <img src={require('../../static/img/others/qiandai.png')} alt=""/>
          <span className="nopurse_span1">您还没有任何钱包哦！</span>
          <p>赶紧添加吧!</p>
        </div>
        </div>
    )
    } else {
      return (
        <div>
          <Topbar kind={'1'} title={'我的钱包'} ifImg={true}/>
          {data.map((item, index) => {
            return <PurseItem key={index + 'purse'}
            purseAddress={item.address} pursename={item.purse_name}
            purseVET={item.purse_vet} purseVTHO={item.purse_vtho}/>
          })}
        </div>
      )
    }
  }
  componentDidMount () {
    if (window.innerHeight) {
      this.setState({
        windowHeight: window.innerHeight
      })
    } else if ((document.body) && (document.body.clientHeight)) {
      this.setState({
        windowHeight: document.body.clientHeight
      })
    }
    const uid = {
      uid: window.localStorage.getItem('uid')
    }
    axios.post(apiPath + '/purse/purselist', qs.stringify(uid)).then((result) => {
      this.setState({
        purseData: result.data.data
      })
    }).catch(() => {
      Toast.info('获取网络请求失败', 1)
    })
  }
}

export default Purse
