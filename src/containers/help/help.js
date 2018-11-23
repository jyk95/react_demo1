import React, { PureComponent } from 'react'
import Topbar from '../../components/topbar/topbar';
import './help.scss'

class Help extends PureComponent {
  render () {
    return (
      <div>
        <Topbar title={'帮助中心'} kind={'2'}/>
        <div className="spancontainer">
          <p className="p1">imnode使用指南</p>
          <p className="p2">关于我们</p>
          <p className="p3">业务支持：xxxxxxxxx</p>
          <p className="p3">商务合作：xxxxxxxxxxx</p>
          <p className="p3">微信小马秘书：</p>
          <p className="p3">QQ群：</p>
        </div>
      </div>
    )
  }
}

export default Help
