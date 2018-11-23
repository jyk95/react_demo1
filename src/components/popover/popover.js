import React, { PureComponent } from 'react'
import './popover.scss'

class Popover extends PureComponent {
  render () {
    return (
     <div className={'popover_container'}>
       <div className={'choose_list'}>
         <p className={'choose_list_p'}>sdfdf</p>
         <img className={'choose_list_img'} src={require('../../static/img/others/choose.png')} alt=""/>
       </div>
       <div className={'confirm_button'}>
         <p>关闭</p>
         <p>确定</p>
       </div>
     </div>
    )
  }
}

export default Popover
