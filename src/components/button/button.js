import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './button.scss'

class SelfButton extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      imgWidth: '80%'
    }
  }
  render () {
    return (
      <div className="btn" onClick={this.props.btnClick}>
        <img
          style={{ width: this.props.imgWidth ? this.props.imgWidth : this.state.imgWidth }}
          src={require('../../static/img/jiedian/button.png')} alt=""/>
        <span>{this.props.middleSpan}</span>
      </div>
    )
  }
}

SelfButton.propTypes = {
  middleSpan: PropTypes.string,
  btnClick: PropTypes.func,
  imgWidth: PropTypes.string
}

export default withRouter(SelfButton)
