import React, { PureComponent } from 'react'
import Topbar from '../../components/topbar/topbar';
import ButtonList from './component/button_list';

class Reward extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <Topbar kind={'2'} title={'积分奖励'}/>
        <div style={{ height: '10px' }}></div>
        <ButtonList leftContent={'邀请用户注册并参投节点获5000VET'} btnMiddle={'立即邀请'}/>
        <ButtonList leftContent={'参与唯链节点'} btnMiddle={'立即参投'}/>
      </div>
    )
  }
}

export default Reward
