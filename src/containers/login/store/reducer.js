import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  list: [],
  loginstate: false,
  userinfo: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.login_username :
      return state.set('loginstate', action.loginstate)
        .set('userinfo', action.userinfo)
    default:
      return state;
  }
}
