import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './weilian.scss'

class Weilian extends PureComponent {
  render () {
    return (
      <div className="weilian">
            <div className="weilian1">
              <span className="topspan1">唯链</span>
              <span className="topspan2">节点有效期至{this.props.endTime}</span>
            </div>
            <div className="weilian2">
              <div className="weilian_div">
                <img className="img1"
                     src={require('../../static/img/jiedian/shanxing.png')}
                     alt=""/>
                <p className="p1">雷霆力量 500,000</p>
                <p className="p2">雷霆闪电 1,000,000</p>
                <p className="p3">雷霆战锤 1,500,000</p>
                <img className="spanimg1"
                     src={require('../../static/img/jiedian/gray.png')}
                     alt=""/>
                <img className="spanimg2"
                     src={require('../../static/img/jiedian/red.png')}
                     alt=""/>
                <img className="spanimg3"
                     src={require('../../static/img/jiedian/yellow.png')}
                     alt=""/>
              </div>
              <img className="img2"
                   src={require('../../static/img/jiedian/zhizheng.png')}
                   alt=""/>
            </div>
            <div className="weilian3">
              <span>参与中:{this.props.inNode}</span>
            </div>
            <div className="weilian4">
              <span >昨日收益:{this.props.yesterdayProfit}</span>
              <span >起投数量:100VET</span>
              <span >累计收益:{this.props.sumProfit}</span>
            </div>
      </div>
    )
  }
}

Weilian.propTypes = {
  yesterdayProfit: PropTypes.string,
  sumProfit: PropTypes.string,
  inNode: PropTypes.string,
  endTime: PropTypes.string
}

export default Weilian
