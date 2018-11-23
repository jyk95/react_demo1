import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  nodeInfo: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.NODE_INFO:
      return state.set('nodeInfo', action.nodeInfo)
    default:
      return state;
  }
}
