import React, { PureComponent } from 'react'
import Usertop from './component/usertop'
import { Toast } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import './integral.scss'
import Spanlist from '../../components/spanlist/spanlist';

class Integral extends PureComponent {
  toRewardPage () {
    this.props.history.push('/my/integral/rewards')
  }
  toastInfo () {
    Toast.info('兑换功能暂未开放', 2)
  }
  render () {
    return (
      <div>
        <Usertop/>
        <div className="mid_list1">
          <div className="div1" onClick={this.toRewardPage.bind(this)}>
            <img src={require('../../static/img/myscore/rewards.png')} alt=""/>
            <span>奖励</span>
          </div>
          <div className="div2" onClick={this.toastInfo.bind(this)}>
            <img src={require('../../static/img/myscore/duihuan.png')} alt=""/>
            <span>兑换</span>
          </div>
          <div className="div3"/>
        </div>
        <div className="jifendetail">
          <span>积分明细</span>
        </div>
        <Spanlist/>
      </div>
    )
  }
}

export default withRouter(Integral)
