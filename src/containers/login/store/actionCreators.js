/* eslint-disable */
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import { Toast } from 'antd-mobile'
import { Link, BrowserRouter, withRouter } from 'react-router-dom'
import history from '../../../history'
import axios from 'axios'
import qs from 'qs'
import * as common from '../../../static/js/common'

export const check = (userinfo) => ({
  type: actionTypes.login_username,
  loginstate: true,
  userinfo: [userinfo]
})

export const func1 = (username, password) => {
  return (dispatch) => {
    const data = {
      username: username,
      password: password
    }
    // console.log(data)
    axios.post(common.apiPath + '/login/api/login', qs.stringify(data)).then((res) => {
      if (res.data.status === true) {
        Toast.info('登录成功！', 2)
        dispatch(check(res.data.data))
        history.push('/main/home')
        localStorage.setItem('username', res.data.data.username)
        localStorage.setItem('mobile', res.data.data.mobile)
        localStorage.setItem('uid', res.data.data.id)
        localStorage.setItem('avater', res.data.data.avater)
        localStorage.setItem('integral', res.data.data.integral)
      } else {
        Toast.info(res.data.message, 2)
      }
    }).catch((err) => {
      console.log(err.message)
    })
  }
}
