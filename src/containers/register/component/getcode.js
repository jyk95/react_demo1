import React, { PureComponent } from 'react'
import { Button, Toast } from 'antd-mobile'
import InputItem from '../../../components/inputitem/inputitem';
import axios from 'axios'
import qs from 'qs'
import './getcode.scss'

class GetCode extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      disabled: true,
      text: '获取验证码',
      number: 60,
      mobile: '',
      code: ''
    }
  }

  render () {
    return (
      <div>
        <InputItem placeholderSpan={'请输入您的手机号'} inputLeftSpan={'手机号'}
                   inputChange={this.mobileInput.bind(this)}
        />
      <div className={'input_item_one'}>
        <span className={'input_item_span_one'}>验证码</span>
        <input className={'input_item_input_one'}
               placeholder='请输入验证码'
               onMouseLeave={this.leaveCode.bind(this)}
                onChange={this.handelChange.bind(this)}/>
        <Button type="primary" inline size="small"
                style={{
                  backgroundColor: '#FE5A18',
                  height: '30px',
                  right: '4%',
                  width: '30%',
                  lineHeight: '30px',
                  padding: '0 0',
                  marginRight: '1%'
                }}
                onClick={this.sendMessage.bind(this)}
                disabled={this.state.disabled}
        >{this.state.text}</Button>
      </div>
      </div>
    )
  }
  // 点击发送验证码
  sendMessage () {
    this.setState({
      disabled: true
    })
    // 验证码计时
    var timer = setInterval(() => {
      if (this.state.number > 0 && this.state.disabled === true) {
        this.setState({
          text: this.state.number-- + 's后重新发送'
        })
      } else {
        this.setState({
          disabled: false,
          text: '获取验证码',
          number: 60
        }, () => {
          clearInterval(timer);
        })
      }
    }, 1000)
    // 发送验证码
    var data = {
      mobile: this.state.mobile,
      type: 1
    }
    axios.post('http://langxiang-shop.svs180.com/mobile/index.php?act=login&op=get_captcha', qs.stringify(data)).then((result) => {
      console.log(result.data)
      if (result.data.state === 1) {
        Toast.info('发送成功', 2)
      }
    }).catch((err) => {
      Toast.info(err.data, 2)
    })
  }
  // 手机号输入框变化
  mobileInput (event) {
    if ((/^1(3|4|5|7|8)\d{9}$/.test(event.target.value.toString())) === true) {
      this.setState({
        disabled: false,
        mobile: event.target.value
      })
      // console.log(this.state.mobile)
    }
  }
  // 验证码输入框变化
  handelChange (event) {
    this.setState({
      code: event.target.value
    })
    // console.log(this.state.code)
  }
  // 离开输入框验证验证码是否成功
  leaveCode () {
    var data = {
      mobile: this.state.mobile,
      type: 1,
      captcha: this.state.code
    }
    if (this.state.code === '') {
    } else if (this.state.code !== '' && (/^1(3|4|5|7|8)\d{9}$/.test(data.mobile) === true)) {
      axios.post('http://langxiang-shop.svs180.com//mobile/index.php?act=login&op=check_captcha', qs.stringify(data)).then((result) => {
        if (result.data.state === 1) {
          Toast.info(result.data.msg, 2)
          // 将手机号及验证状态传给父组件
          this.props.conveyMobile(this.state.mobile, 1)
        } else {
          Toast.info('验证失败', 1)
          this.props.conveyMobile(this.state.mobile, 0)
        }
      }).catch(() => {
          Toast.info('获取请求失败，请稍后再试', 2)
      })
    }
  }
}

export default GetCode
