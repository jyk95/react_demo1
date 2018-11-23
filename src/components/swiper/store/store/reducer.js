import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'


const defaultState  =  fromJS({
  swiperData : []
})

export default ( state = defaultState , action ) => {
  switch ( action.type ) {
    case actionTypes.MAIN_SWIPER :
      return state.set('swiperData', action.swiperData)
    default:
      return state;
  }
}