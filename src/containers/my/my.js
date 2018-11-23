import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import Userinfo from './component/userinfo'
import List from '../../components/list/list'

class My extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.history)
    return (
      <div>
        <Userinfo/>
        <List leftSpan={'我的节点'} toPageName={'/my/myjiedian'}
              imgUrl={require('../../static/img/my/jiedian.png')}
              divHeight={'50px'}/>
        <List leftSpan={'我的钱包'} toPageName={'/my/purse'}
              imgUrl={require('../../static/img/my/purse.png')}
              divHeight={'50px'}/>
        <List leftSpan={'我的积分'} toPageName={'/my/integral'}
              imgUrl={require('../../static/img/my/jifen.png')}
              divHeight={'50px'}/>
        <List leftSpan={'个人设置'} toPageName={'/my/usersetting'}
              imgUrl={require('../../static/img/my/chilun.png')}
              divHeight={'50px'}/>
        <List leftSpan={'帮助中心'} toPageName={'/my/help'}
              imgUrl={require('../../static/img/my/help.png')}
              divHeight={'50px'}/>
        <List leftSpan={'退出登录'} imgUrl={require('../../static/img/my/exit.png')} divHeight={'50px'}/>
      </div>
    )
  }
}

export default withRouter(My)
