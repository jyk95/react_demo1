import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './button_list.scss'

class ButtonList extends PureComponent {
  render () {
    return (
        <div className="button_list_div1">
          <p className="button_list_p1">{ this.props.leftContent }</p>
          <div className="button_list_div2">
            <span className={'button_list_span1'}>{ this.props.btnMiddle }</span>
          </div>
        </div>
    )
  }
}

ButtonList.propTypes = {
  leftContent: PropTypes.string,
  btnMiddle: PropTypes.string,
  clickFunc: PropTypes.func
}

export default ButtonList
