import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { toJS } from 'immutable'
import Topbar from '../../components/topbar/topbar'
import Weilian from '../../components/weilian/weilian'
import List from '../../components/list/list'
import SelfButton from '../../components/button/button'
import * as actionCreator from './store/actionCreators'
import './jiedian.scss'

class Jiedian extends PureComponent {
  render () {
    const { nodeInfo } = this.props
    return (
      <div>
        <Topbar kind={'0'} title={'节点'}/>
        {nodeInfo.map((item, index) => (
          <Weilian key={index + 'weilian'} endTime={item.end_time}
          inNode={item.node_sum_vet + 'VET'} sumProfit={item.node_sum_vtho + 'VTHO'}/>
        ))}
        <List leftSpan={'节点说明'}
              imgUrl={require('../../static/img/jiedian/introduce.png')}
              toPageName={'/jiedian/introduction'}
        />
        <SelfButton middleSpan={'参与'} btnClick={this.joinNode.bind(this)}/>
      </div>
    )
  }
  joinNode () {
    this.props.history.push('/jiedian/join')
  }
  componentDidMount () {
    this.props.getNodeInfo()
  }
}
const mapStateToProps = (state) => {
  return {
    nodeInfo: state.getIn(['node', 'nodeInfo'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  getNodeInfo () {
    dispatch(actionCreator.getNode())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Jiedian))
