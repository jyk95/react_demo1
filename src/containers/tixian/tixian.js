import React, { PureComponent } from 'react'
import Topbar from '../../components/topbar/topbar'
import List from '../../components/list/list';
import './tixian.scss'
import SelfButton from '../../components/button/button';

class Tixian extends PureComponent {
  render () {
    return (
      <div>
        <Topbar kind={'1'} title={'提币'}/>
        {/* 钱包选择区域 */}
        <div className="detail_list">
          <div className="span_box">
            <span className="span1">唯链</span>
            <span className="span2">(sddsfdfsd)</span>
            <span className="span3">xxxxxxxxx</span>
          </div>
          <img className="jiantou_img" src={require('../../static/img/jiedian/youjiantou.png')}
               alt=""/>
        </div>
        { /* 提币金额输入框 */ }
        <div className="tixian_box">
          <div className="tixian_box_div1">
            <input type="text" placeholder="请输入您要提现的额度"/>
          </div>
          <div className="tixian_box_div2">
            <span className="tixian_box_span1">VET</span>
            <img className="tixian_box_jiantou_img" src={require('../../static/img/others/xiajiantou.png')} alt=""/>
          </div>
        </div>
        {/* tip区域 */}
        <div className="tips_box">
          <div className="tips_box_p1">可提取额度：
                <span className="tips_box_numberspan">sdfs</span>
          </div>
          <span className="tips_box_span2">当前成熟额度为1000</span>
          <span className="tips_box_span3">注：所有币种提现及奖励都按钱包地址原路返回</span>
        </div>
        {/* 手续费区域 */}
        <List leftSpan={'手续费'} divHeight={'50px'}
              rightSpan={'sdfsdf'}/>
        <SelfButton middleSpan={'提交申请'} imgWidth={'70%'}/>
      </div>
    )
  }
}

export default Tixian
