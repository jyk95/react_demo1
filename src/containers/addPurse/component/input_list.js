import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './input_list.scss'

class InputList extends PureComponent {
  render () {
    return (
        <div className="input_list">
          <div className="input_list_div1">
            <span className={'input_list_span1'}>{ this.props.InputListRightSpan}</span>
          </div>
          <input className="input_list_input1" type="text" placeholder={ this.props.placeholderSpan }/>
      </div>
    )
  }
}

InputList.propTypes = {
  InputListRightSpan: PropTypes.string,
  placeholderSpan: PropTypes.string
}

export default InputList
