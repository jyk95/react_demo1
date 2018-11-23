import React, { PureComponent } from 'react'
import { Toast } from 'antd-mobile'
import Topbar from '../../components/topbar/topbar';
import InputItem from '../../components/inputitem/inputitem';
import SelfButton from '../../components/button/button';
import axios from 'axios'
import qs from 'qs'
import * as common from '../../static/js/common'
import GetCode from './component/getcode';

class Register extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      mobile: '',
      message: '',
      password: '',
      confirmPassword: '',
      inviteCode: '',
      passCode: ''
    }
  }

  render () {
    return (
      <div>
        <Topbar kind={'1'} title={'注册'}/>
        <InputItem placeholderSpan={'请输入您的用户名'} inputLeftSpan={'用户名'}
                   inputChange={this.userInput.bind(this)}/>
        <GetCode conveyMobile={this.getmobilenum.bind(this)}/>
        <InputItem placeholderSpan={'请输入您的邀请码(如没有可不填)'} inputLeftSpan={'邀请码'}
                   inputChange={this.inviteInput.bind(this)}/>
        <InputItem placeholderSpan={'请输入您的密码'} inputLeftSpan={'密码'}
                   inputType={'password'} inputChange={this.passwordInput.bind(this)}/>
        <InputItem placeholderSpan={'请再次输入您的密码'} inputLeftSpan={'确认密码'}
                   inputType={'password'} inputChange={this.passwordAgain.bind(this)}/>
        <SelfButton middleSpan={'注册'} imgWidth={'70%'} btnClick={this.register.bind(this)}/>
      </div>
    )
  }
  userInput (event) {
    this.setState({
      username: event.target.value
    })
  }
  passwordInput (event) {
    this.setState({
      password: event.target.value
    })
  }
  passwordAgain (event) {
    this.setState({
      confirmPassword: event.target.value
    })
  }
  inviteInput (event) {
    this.setState({
      inviteCode: event.target.value
    })
  }
  getmobilenum (e, b) {
    this.setState({
      mobile: e,
      passCode: b
    })
    // console.log(this.state.mobile, this.state.passCode)
  }
  register () {
    var userinfo = {
      username: this.state.username,
      password: this.state.password,
      mobile: this.state.mobile,
      inviteCode: this.state.inviteCode,
      passCode: this.state.passCode,
      confirmPassword: this.state.confirmPassword
    }
    if (userinfo.username === '') {
      Toast.info('用户名不能为空', 2)
    } else if (userinfo.password === '') {
      Toast.info('密码不能为空', 2)
    } else if (userinfo.password !== userinfo.confirmPassword) {
      Toast.info('两次密码不一致', 2)
    } else if (userinfo.passCode !== 1) {
      Toast.info('手机号验证失败', 2)
    } else if (userinfo.password.length < 6) {
      Toast.info('密码不得小于6位', 2)
    } else {
      axios.post(common.apiPath + '/register/api/register',
        qs.stringify(userinfo)).then((result) => {
        if (result.data.status === true) {
          this.props.history.push('/')
          Toast.info('注册成功', 2)
        } else {
          Toast.info(result.data.message, 2)
        }
      }).catch(() => {
        Toast.info('获取网络请求失败')
      })
    }
  }
}

export default Register
