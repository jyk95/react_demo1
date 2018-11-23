import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './list.scss'

class List extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      divHeight: '40px'
    }
  }
  toPages () {
    this.props.history.push(this.props.toPageName);
  }
  render () {
    return (
      <div className={'introduction'}
           onClick={this.toPages.bind(this)}
            style={{ height: this.props.divHeight ? this.props.divHeight : this.state.divHeight }}>
        <img className={'left_img'}
             src={ this.props.imgUrl } alt=""/>
        <span className={'left_span'}> {this.props.leftSpan} </span>
        <div className={'right_div'}
             style={{ height: this.props.divHeight ? this.props.divHeight : this.state.divHeight }}>
          <span className={'right_span'}
                style={{ lineHeight: this.props.divHeight ? this.props.divHeight : this.state.divHeight }}
          >
            {this.props.rightSpan}
          </span>
          <img className={'jiantou_img'}
               src={require('../../static/img/jiedian/youjiantou.png')} alt=""/>
        </div>
      </div>
    )
  }
}

List.propTypes = {
  leftSpan: PropTypes.string,
  rightSpan: PropTypes.string,
  toPageName: PropTypes.string,
  divHeight: PropTypes.string,
  imgUrl: PropTypes.string
}

export default withRouter(List)
