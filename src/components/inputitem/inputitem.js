import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './inputitem.scss'

class InputItem extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      inputType: 'text'
    }
  }
  render () {
    return (
      <div className={'input_item'}>
        <span className={'input_item_span'}> {this.props.inputLeftSpan} </span>
        <input className={'input_item_input'} type={this.props.inputType ? this.props.inputType : this.state.inputType}
        placeholder={this.props.placeholderSpan} onChange={this.props.inputChange}/>
      </div>
    )
  }
}

InputItem.propTypes = {
  inputLeftSpan: PropTypes.string,
  placeholderSpan: PropTypes.string,
  inputChange: PropTypes.func,
  inputType: PropTypes.string,
  inputValue: PropTypes.string
  // inputValue: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.number,
  //     PropTypes.bool
  // ])
}

export default InputItem
