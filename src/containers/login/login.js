import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
import './login.scss'
import Toregister from './component/toregister';

class Login extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      inpValue1: '',
      inpValue2: '',
      windowHeight: ''
    }
  }
  handleChange (event) {
    this.setState({
      inpValue2: event.target.value
    })
  }
  handleChange1 (event) {
    this.setState({
      inpValue1: event.target.value
    })
  }

  render () {
    // const { test , history , userinfo , loginstate } = this.props;
    // console.log(userinfo)
    // console.log(loginstate)
    // if( loginstate === false){
      return (
        <div style={{ height: this.state.windowHeight, backgroundColor: '#fff' }}>
          <div className={'top_div'}>
            <img className={'bgc_img'} src={require('../../static/img/login/bgi.png')} alt=""/>
            <div className={'white_box'}>
              <img className={'logo_img'} src={require('../../static/img/others/logo.png')} />
            </div>
            <span className={'span_node'}>im Node</span>
          </div>
          <div className="login_container">
            <div className={'login'}>
              <div className={'login_box'}>
                <img src={require('../../static/img/login/my.png')} alt=""/>
                <input className={'input_1'} type="password "
                       onChange={this.handleChange1.bind(this)}
                       value={this.state.inpValue1}/>
              </div>
            </div>

            <div className={'login'}>
              <div className={'login_box'}>
                <img src={require('../../static/img/login/lock.png')} alt=""/>
                <input className={'input_1'} type="password "
                       onChange={this.handleChange.bind(this)}
                       value={this.state.inpValue2}/>
              </div>
            </div>
          </div>
          <Toregister/>
          <div className="btn" onClick={ () => this.props.loginbtn(this.state.inpValue1, this.state.inpValue2) }>
            <img src={require('../../static/img/jiedian/button.png')} alt=""/>
            <span>登录</span>
          </div>
        </div>
      )
    // }else{
    //     //   return <Redirect to='/main'/>
    //     // }
  }
  componentDidMount () {
    if (window.innerHeight) {
      this.setState({
        windowHeight: window.innerHeight
      })
    } else if ((document.body) && (document.body.clientHeight)) {
      this.setState({
        windowHeight: document.body.clientHeight
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
    userinfo: state.getIn(['login', 'userinfo']),
    loginstate: state.getIn(['login', 'loginstate'])
  }
}

const mapDispatchToProps = (dispatch) => ({
    loginbtn (username, password) {
      dispatch(actionCreators.func1(username, password))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
