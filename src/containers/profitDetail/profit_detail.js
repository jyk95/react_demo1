import React, { PureComponent } from 'react'
import Topbar from '../../components/topbar/topbar'

class ProfitDetail extends PureComponent {
  render () {
    return (
      <div>
        <Topbar title={'收益明细'} kind={'1'}/>
      </div>
    )
  }
}

export default ProfitDetail
