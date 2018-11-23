import React, { PureComponent } from 'react'
import axios from 'axios'
import qs from 'qs'
import { Toast } from 'antd-mobile'
import { apiPath } from '../../static/js/common';
import Topbar from '../../components/topbar/topbar';
import Weilian from '../../components/weilian/weilian';
import List from '../../components/list/list';
import SelfButton from '../../components/button/button';

class Myjifen extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      joinVet: 0,
      profit: 0,
      yesterProfit: 0
    }
  }
  render () {
    return (
      <div>
        <Topbar kind={'1'} title={'我的节点'}/>
        <Weilian yesterdayProfit={this.state.yesterProfit + 'VTHO'} inNode={this.state.joinVet + 'VET'}
        sumProfit={this.state.profit + 'VTHO'}/>
        <List leftSpan={'收益明细'}
              imgUrl={require('../../static/img/jiedian/introduce.png')}
              toPageName={'/my/myjiedian/profitdetail'}
        />
        <List leftSpan={'参与明细'}
              imgUrl={require('../../static/img/others/mingxi.png')}
              toPageName={'/my/myjiedian/joindetail'}
              rightSpan={'参与中:' + this.state.joinVet + 'VET'}
        />
        <List leftSpan={'提币'}
              imgUrl={require('../../static/img/others/tixian.png')}
              toPageName={'/my/myjiedian/tixian'}
              rightSpan={'可提取:' + this.state.profit + 'VET'}
        />
        <SelfButton middleSpan={'继续参与'} btnClick={this.topage.bind(this)}/>
      </div>
    )
  }
  topage () {
    this.props.history.push('/jiedian/join')
  }
  componentDidMount () {
    var uid = {
      uid: window.localStorage.getItem('uid')
    }
    axios.post(apiPath + '/usernode/usernode', qs.stringify(uid)).then((result) => {
      this.setState({
        joinVet: result.data.data.self_vet,
        profit: result.data.data.self_vtho,
        yesterProfit: 0
      })
      // console.log(result.data + result.data.data.self_vtho)
    }).catch(() => {
      Toast.info('获取网络请求失败', 2)
    })
  }
}

export default Myjifen
