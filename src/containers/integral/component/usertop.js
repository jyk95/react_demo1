import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import './usertop.scss'

class Usertop extends PureComponent {
  constructor (props) {
    super(props)
  }
  goback () {
    this.props.history.go(-1)
  }
  render () {
    return (
        <div className="usertop_headbar">
          <img className="img1" onClick={this.goback.bind(this)}
               src={require('../../../static/img/others/zuojiantou.png')} alt=""/>
          <img className={'img2'} src={require('../../../static/img/myscore/rectangle.png')} alt=""/>
          <span className="span1">我的积分</span>
          <span className="span2" >3000</span>
          <span className="span3">当前积分</span>
        </div>
    )
  }
}
export default withRouter(Usertop);
