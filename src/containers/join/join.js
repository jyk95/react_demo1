import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { List } from 'immutable'
import { Toast } from 'antd-mobile'
import axios from 'axios'
import qs from 'qs'
import Topbar from '../../components/topbar/topbar'
import SelfButton from '../../components/button/button'
import { apiPath } from '../../static/js/common';
import './join.scss'

class Join extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      purchaseNumber: ''
    }
  }
  getPurchaseNumber (event) {
    this.setState({
      purchaseNumber: event.target.value
    })
    // console.log(this.state.purchaseNumber)
  }
  render () {
    const { nodeAddress } = this.props
    // const abc = List(nodeAddress).toJS()
    // const joinAddress = abc[0].node_address
    const joinAddress = window.localStorage.getItem('node_address')
    return (
      <div>
        <Topbar title={'唯链节点'} kind={'1'}/>
        <div className="address">
          <div className="jiedian_address">
            <span className="add_span">节点地址</span>
          </div>
          <div className="textdiv">
              <textarea defaultValue={joinAddress} rows="3" cols="20"/>
            <div className="adddiv1">
              <img className="add_img" src={require('../../static/img/others/copy.png')}
                   alt=""/>
              <span className="add_span1">复制</span>
            </div>
          </div>
          <div className="attention">
            <p>1.禁止向VET地址充值除VET之外的资产，任何充入VET地址的非VET资产将不可找回
              <br/>2.奖励、提币均按原地址返回，不支持修改
            </p>
          </div>
          <div className="jiedian_address">
            <span className="add_span">交易号</span>
          </div>
          <div className="jiaoyi_number">
            <input type="text" onChange={this.getPurchaseNumber.bind(this)}/>
          </div>
          <div className="attention">
            <p>注：系统根据交易号会自动识别用户钱包地址，该地址也是提币唯一地址</p>
          </div>
          <SelfButton middleSpan={'确定'} btnClick={this.joinNode.bind(this)}/>
        </div>
      </div>
    )
  }
  joinNode () {
    const uid = window.localStorage.getItem('uid')
    const nodeAddress = window.localStorage.getItem('node_address')
    var joindata = {
      uid: uid,
      purchase_number: this.state.purchaseNumber,
      node_address: nodeAddress
    }
    // console.log(joindata)
    axios.post(apiPath + '/node/api/join', qs.stringify(joindata)).then((result) => {
      if (result.data.status === true) {
        Toast.info('参与成功', 1)
        setTimeout(() => {
          this.props.history.push('/my/myjiedian')
        }, 2000)
      } else if (result.data.status === false) {
        Toast.info('交易号错误', 1)
      }
    }).catch(() => {
      Toast.info('获取网络请求失败', 1)
    })
  }
}

const mapStateToProps = (state) => {
  return {
    nodeAddress: state.getIn(['node', 'nodeInfo'])
  }
}

export default connect(mapStateToProps, null)(Join)
