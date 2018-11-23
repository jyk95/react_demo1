/*eslint-disable*/
import React, { Component } from 'react';
import { BrowserRouter, Route, Router, Redirect } from 'react-router-dom';
import history from './history'
import Login from './containers/login/login'
import Main from './containers/main/main'
import Introduction from './containers/introduction/introduction';
import Join from './containers/join/join';
import Help from './containers/help/help'
import Myjiedian from './containers/myjiedian/myjiedian'
import Purse from './containers/purse/purse'
import Integral from './containers/integral/integral'
import Usersetting from './containers/user_setting/user_setting'
import Reward from './containers/rewards/rewards';
import Tixian from './containers/tixian/tixian';
import JoinDetail from './containers/joinDetail/join_detail';
import AddPurse from './containers/addPurse/add_purse';
import ProfitDetail from './containers/profitDetail/profit_detail';
import Register from './containers/register/register';

class Routers extends Component {
  render () {
    return (
        <Router history={history}>
          <div>
            <Route exact path='' component={Login}></Route>
            <Route path='/main' component={Main}></Route>
            <Route path='/register' component={Register}></Route>
            <Route exact path='/jiedian/introduction' component={Introduction}></Route>
            <Route exact path='/jiedian/join' component={Join}></Route>
            <Route exact path='/my/help' component={Help}></Route>
            <Route exact path='/my/myjiedian' component={Myjiedian}></Route>
            <Route exact path='/my/purse' component={Purse}></Route>
            <Route exact path='/my/integral' component={Integral}></Route>
            <Route exact path='/my/usersetting' component={Usersetting}></Route>
            <Route exact path='/my/integral/rewards' component={Reward}></Route>
            <Route exact path='/my/myjiedian/tixian' component={Tixian}></Route>
            <Route exact path='/my/myjiedian/joindetail' component={JoinDetail}></Route>
            <Route exact path='/my/myjiedian/profitdetail' component={ProfitDetail}></Route>
            <Route exact path='/my/purse/addpurse' component={AddPurse}></Route>
          </div>
        </Router>
    );
  }
}

export default Routers;
