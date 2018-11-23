import * as actionTypes from './actionTypes'
import axios from 'axios'
import { Toast } from 'antd-mobile'
import { apiPath } from "../../../static/js/common";

export const getSwiperData = () => {
  return (dispatch) => {
    axios.post( apiPath + '/manager/api/home/getBroadccast').then((res) => {
      dispatch({
        type : actionTypes.MAIN_SWIPER,
        swiperData : res.data.data
      })
    }).catch((err) => {
      Toast.info(err.data.message , 2)
    })
  }
}