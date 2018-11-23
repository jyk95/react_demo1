import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import './toregister.scss'

class Toregister extends PureComponent {
  render () {
    return (
      <div className="login_1">
        <div className="login_1_box">
          <Link to={'/register'}>
            <span>注册</span>
          </Link>
          <span>忘记密码？</span>
        </div>
      </div>
    )
  }
}

export default Toregister
