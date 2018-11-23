import React, { PureComponent } from 'react'
import Topbar from '../../components/topbar/topbar'

class Introduction extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const wordStyle = { fontSize: '12px', color: '#434242', margin: '10px 10px', lineHeight: '18px' }
    return (
      <div>
        <Topbar kind={'1'} title={'节点介绍'} ifImg={false}/>
        <div className="intro_box">
          <p style={wordStyle}>用户参与共享节点获得的奖励：基础奖励+节点奖励<br/>
          基础奖励：同唯链官方基础奖励，4.32枚VTHO/万枚VET/天，100%返回给用户。<br/>
          节点奖励：<br/>
          雷霆力量节点：奖励100%返还给参与用户，平台不赚一分钱<br/>
          雷霆闪电节点：奖励100%返还给参与用户，平台不赚一分钱<br/>
          雷霆战锤节点：奖励80%返还给参与用户，平台收20%管理费<br/>
          起投数量：1000VET，不足1000VET的无法享受节点奖励。<br/>
          注：唯链共享节点的奖励每自然周结算一次，在唯链官方发放节点奖励的当天就给用户结算节点奖励，不得向共享节点转入除VET以外的其它币种。
          </p>
        </div>
      </div>
    )
  }
}

export default Introduction
