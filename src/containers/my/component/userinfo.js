import React, { PureComponent } from 'react'
import './userinfo.scss'

class Userinfo extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="bgc_container">
        <img className="bgc_img" src={require('../../../static/img/my/bgc.png')} alt=""/>
        <div className="white_box">
          <img alt="" id="avatar" className='img-circle'/>
        </div>
        <span className="topSpan topSpan1"/>
        <span className="topSpan topSpan2">总资产约(元)</span>
        <span className="topSpan topSpan3">123123</span>
        <div className="bottomdiv">
          <div className="leftdiv">
            <span className="botSpan1">昨日收益约(元)</span>
            <span className="botSpan2">xxx</span>
          </div>
          <div className="middiv"></div>
          <div className="rightdiv">
            <span className="botSpan1">个人累计收益约(元)</span>
            <span className="botSpan2">xxx</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Userinfo
