import React, { PureComponent } from 'react'
import { Tabs } from 'antd-mobile'
import axios from 'axios'
import qs from 'qs'
import { apiPath } from '../../static/js/common';
import Topbar from '../../components/topbar/topbar';
import './join_detail.scss'

class JoinDetail extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      joinDetail: [],
      tixianDetail: []
    }
  }
  render () {
    const tabs = [
      { title: '参投' },
      { title: '提取' }
      ]
    const joinDetail = this.state.joinDetail
    return (
      <div>
        <Topbar title={'参与明细'} kind={'1'}/>
          <Tabs tabs={tabs}
                initialPage={0}
                tabBarActiveTextColor={'#D33D01'}
                tabBarUnderlineStyle={{ border: '1px #D33D01 solid' }}
          >
            <div style={{ display: 'flex', margin: '10px 0 10px 0', justifyContent: 'center', height: '150px' }}>
              {joinDetail.map((item, index) => {
                return (
                  <div key={'joindetail'.concat(index)} className="join_detail_list">
                    <span className={'detail_left_span'}>{item.message}</span>
                    <span className="detail_right_span">{item.add_time}</span>
                  </div>)
              })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', height: '150px' }}>
            </div>
          </Tabs>
        </div>
    )
  }
  componentDidMount () {
    const uid = {
      uid: window.localStorage.getItem('uid')
    }
    axios.post(apiPath + '/detail/joindetail', qs.stringify(uid)).then((result) => {
      this.setState({
        joinDetail: result.data.data
      })
    })
  }
}

export default JoinDetail
