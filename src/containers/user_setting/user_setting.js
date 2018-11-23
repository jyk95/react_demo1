import React, { PureComponent } from 'react'
import Topbar from '../../components/topbar/topbar';
import List from '../../components/list/list';

class Usersetting extends PureComponent {
  render () {
    return (
      <div>
        <Topbar title={'个人设置'} kind={'1'}/>
        <List leftSpan={'修改用户名'} rightSpan={'dd'}/>
        <List leftSpan={'修改密码'} rightSpan={'sfsdf'}/>
        <List leftSpan={'修改绑定手机'} rightSpan={'dsfsddfffds'}/>
      </div>
    )
  }
}

export default Usersetting
