import { combineReducers } from 'redux-immutable';
import { reducer as loginReducer } from '../containers/login/store'
import { reducer as mainReducer } from '../containers/main/store'
import { reducer as swiperReducer } from '../components/swiper/store'
import { reducer as nodeReducer } from '../containers/jiedian/store'

const reducer = combineReducers({
  login: loginReducer,
  main: mainReducer,
  swiper: swiperReducer,
  node: nodeReducer
})

export default reducer;
