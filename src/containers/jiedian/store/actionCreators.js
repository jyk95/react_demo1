import * as actionTypes from './actionTypes'
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { apiPath } from '../../../static/js/common';

export const getNode = () => {
  return (dispatch) => {
    axios.post(apiPath + '/node/api/jiedian').then((res) => {
      dispatch({
        type: actionTypes.NODE_INFO,
        nodeInfo: res.data.data
      })
      // eslint-disable-next-line
      localStorage.setItem('node_address', res.data.data[0].node_address)
    }).catch((err) => {
      if (err) {
        Toast.info('获取网络请求失败', 2)
      }
    })
  }
}
