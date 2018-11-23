import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom'
import './topbar.scss'

class Topbar extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }
  goback () {
    this.props.history.go(-1)
  }
  toAddPage () {
    this.props.history.push('/my/purse/addpurse')
  }
  checkKind () {
    const kind = this.props.kind
    if (this.props.ifImg === false) {
      this.setState = ({
        rightImg: null
      })
    }
    if (kind === '0') {
      return (
        <div className="headbar">
          <span>{this.props.title}</span>
        </div>
      )
    } else if (kind === '1') {
      if (this.props.ifImg === false || this.props.ifImg === undefined) {
        return (
          <div className="headbar1">
            <img className={'header_leftimg'}
                 onClick={this.goback.bind(this)}
                 src={require('../../static/img/others/zuojiantou.png')} alt=""/>
            <span>{this.props.title}</span>
          </div>
        )
      } else {
        return (
          <div className="headbar1">
            <img className={'header_leftimg'}
                 onClick={this.goback.bind(this)}
                 src={require('../../static/img/others/zuojiantou.png')} alt=""/>
            <div className="imgdiv" onClick={this.toAddPage.bind(this)}>
              <img className="jiahao" src={require('../../static/img/others/jiahao.png')} alt=""/>
            </div>
            <span>{this.props.title}</span>
          </div>
        )
      }
    } else if (kind === '2') {
      return (
        <div className="headbar2">
          <img
            onClick={this.goback.bind(this)}
            src={require('../../static/img/others/heizuojiantou.png')} alt=""/>
          <span>{this.props.title}</span>
        </div>
        )
    }
  }
  render () {
    return (
      <div>
        { this.checkKind() }
      </div>
    )
  }
}

Topbar.propTypes = {
  kind: PropTypes.string,
  title: PropTypes.string,
  rightImg: PropTypes.element,
  ifImg: PropTypes.bool
}

export default withRouter(Topbar)
