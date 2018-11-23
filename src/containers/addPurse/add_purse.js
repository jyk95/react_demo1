import React, { PureComponent } from 'react'
import Topbar from '../../components/topbar/topbar';
import InputList from './component/input_list';
import List from '../../components/list/list';
import SelfButton from '../../components/button/button';

class AddPurse extends PureComponent {
  render () {
    return (
      <div>
        <Topbar kind={'1'} title={'添加钱包'}/>
        <InputList InputListRightSpan={'钱包地址'} placeholderSpan={'请输入钱包地址'}/>
        <InputList InputListRightSpan={'钱包名称'} placeholderSpan={'请输入钱包名称'}/>
        <SelfButton middleSpan={'提交申请'}/>
      </div>
    )
  }
}

export default AddPurse
