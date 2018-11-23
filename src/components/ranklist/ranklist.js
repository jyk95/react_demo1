import React, { PureComponent } from 'react'
import axios from 'axios'
import * as common from '../../static/js/common'
import { Toast } from 'antd-mobile'
import './ranklist.scss'

class Ranklist extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      invest: [],
      profit: []
    }
  }
  render () {
    const invest = this.state.invest;
    const profit = this.state.profit;
    return (
      <div>
        <div className="ranklist_top">
          <img src={require('../../static/img/main/butterfly.png')} alt=""/>
          <span>VET收益排行榜</span>
        </div>
        <table className={'profit_table'} >
          <thead>
          <tr>
            <td style={{ width: '26.7%' }}>排名</td>
            <td style={{ width: '26.7%' }}>用户</td>
            <td style={{ width: '46.7%' }}>累计收益额</td>
          </tr>
          </thead>
          <tbody>
          { invest.map((item, index) => (
            <tr key={ index + 'a'}>
              <td key={ index + 'b'}>
                <img src={require('../../static/img/main/rankimg'.concat(index + 1, '.png'))} alt=""/>
              </td>
              <td style={{ color: '#434242' }} key={ index + 'c'}> { item.username } </td>
              <td key={ index + 'd'}> { parseFloat(item.sumvet).toFixed(2) } VET </td>
            </tr>
          ))}
          </tbody>
        </table>

        <div className="ranklist_top">
          <img src={require('../../static/img/main/butterfly.png')} alt=""/>
          <span>VET投资排行榜</span>
        </div>
        <table className={'profit_table'} >
          <thead>
          <tr>
            <td style={{ width: '26.7%' }}>排名</td>
            <td style={{ width: '26.7%' }}>用户</td>
            <td style={{ width: '46.7%' }}>累计投资额</td>
          </tr>
          </thead>
          <tbody>
          { profit.map((item, index) => (
            <tr key={ index + 'a'}>
              <td key={ index + 'b'}>
                <img src={require('../../static/img/main/rankimg'.concat(index + 1, '.png'))} alt=""/>
              </td>
              <td style={{ color: '#434242' }} key={ index + 'c'}> { item.username } </td>
              <td key={ index + 'd'}> { item.sumvtho } VET </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
  }
  componentDidMount () {
    axios.post(common.apiPath + '/rank/vetrank').then((res) => {
      this.setState({
        invest: res.data.data
      })
    }).catch(() => {
      Toast.info('获取请求失败', 2)
    })

    axios.post(common.apiPath + '/rank/vthorank').then((res) => {
      this.setState({
        profit: res.data.data
      })
    }).catch(() => {
      Toast.info('获取请求失败', 2)
    })
  }
}
export default Ranklist
