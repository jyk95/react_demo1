import React, { PureComponent } from 'react';
import { TabBar } from 'antd-mobile';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import Jiedian from '../../containers/jiedian/jiedian';
import Discover from '../../containers/discover/discover';
import My from '../../containers/my/my';
import Home from '../../containers/home/home';
import './main.scss';

class Main extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      windowHeight: ''
    };
  }

  render () {
    return (
      <div style={{ width: '100%', height: this.state.windowHeight }}>
        <TabBar
          barTintColor="white"
          tintColor="#D33D01"
          unselectedTintColor="#BABABA"
          tabBarPosition='bottom'
        >
          {/* 首页 */}
          <TabBar.Item
            title="首页"
            key="首页"
            icon={
              <div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/mainicon1.png')} alt=""/>
            </div>}
            selectedIcon={
              <div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/mainicon2.png')} alt=""/>
            </div>}
            selected={this.props.history.location.pathname === '/main/home'}
            onPress={() => {
              this.props.history.push('/main/home');
            }}
          >
            <Route path='/main/home' component={Home}></Route>
          </TabBar.Item>
          {/* 节点 */}
          <TabBar.Item
            title="节点"
            key="节点"
            icon=
              {<div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/jiedian1.png')} alt=""/>
            </div>}
            selectedIcon={
              <div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/jiedian2.png')} alt=""/>
            </div>}
            selected={this.props.history.location.pathname === '/main/jiedian'}
            onPress={() => {
              this.props.history.push('/main/jiedian');
            }}
          >
            <Route path='/main/jiedian' component={Jiedian}></Route>
          </TabBar.Item>
          {/* 发现 */}
          <TabBar.Item
            title="发现"
            key="发现"
            icon={
              <div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/discover1.png')} alt=""/>
            </div>}
            selectedIcon={
              <div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/discover2.png')} alt=""/>
            </div>}
            selected={this.props.history.location.pathname === '/main/discover'}
            onPress={() => {
              this.props.history.push('/main/discover');
            }}
          >
            <Route path='/main/discover' component={Discover}></Route>
          </TabBar.Item>
          {/* 我的 */}
          <TabBar.Item
            title="我的"
            key="我的"
            icon={
              <div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/myicon1.png')} alt=""/>
            </div>}
            selectedIcon={
              <div style={{ width: '22px', height: '22px' }}>
              <img style={{ width: '100%', height: '100%' }}
                   src={require('../../static/img/bottomicon/myicon2.png')} alt=""/>
              </div>}
            selected={this.props.history.location.pathname === '/main/my'}
            onPress={() => {
              this.props.history.push('/main/my');
            }}
          >
            <Route path='/main/my' component={My}></Route>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }

  componentDidMount () {
    // 根据屏幕大小决定高度
    if (window.innerHeight) {
      this.setState({
        windowHeight: window.innerHeight
      });
      // var winHeight =
    } else if ((document.body) && (document.body.clientHeight)) {
      this.setState({
        windowHeight: document.body.clientHeight
      });
    }
  }
}

export default withRouter(Main);
