import React, { PureComponent } from 'react'
import './spanlist.scss'

class Spanlist extends PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="span_list">
        <p className="span_list_p1" >sdfsd</p>
        <span className="span_list_span1">2018 7.7 17:07:07</span>
      </div>
    )
  }
}

export default Spanlist
