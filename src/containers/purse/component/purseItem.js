import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './purseItem.scss'
class PurseItem extends PureComponent {
  render () {
    const data = this.props.msg
    return (
          <div className="purse_container">
            <img className="purse_img1" src={require('../../../static/img/others/weilianbgc.png')}
                 alt=""/>
            <img className="purse_img2" src={require('../../../static/img/others/wei.png')} alt=""/>
            <p className="purse_p1">
              <span className="name_span">{this.props.pursename}</span>
            </p>
            <div className="node_div">
              <span className="wallet_vet" >VET:{this.props.purseVET}</span><br/>
              <span className="wallet_vtho" >VTHO:{this.props.purseVTHO}</span>
            </div>
            <span className="purse_span4">{this.props.purseAddress}</span>
          </div>
    )
  }
  componentDidMount () {
    console.log(this.props.msg)
  }
}
PurseItem.propTypes = {
  pursename: PropTypes.string,
  purseAddress: PropTypes.string,
  purseVET: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  purseVTHO: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default PurseItem
