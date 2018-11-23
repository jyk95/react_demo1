import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import * as common from '../../static/js/common'
import * as actionCreators from './store/actionCreators';

class Swiper extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      imgHeight: 170
    }
  }
  render () {
    const { mainSwiper } = this.props
    return (
      <div>
        <Carousel
          autoplay={true}
          infinite
        >
          {mainSwiper.map((item, index) => (
            <a
              key={ item + index}
              href={item.topage}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                key={ index }
                src={ common.apiPath + item.src }
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </div>
    )
  }
  componentDidMount () {
    this.props.getSwiper()
  }
}

const mapStateToProps = (state) => {
  return {
    mainSwiper: state.getIn(['swiper', 'swiperData'])
  }
}

const mapDispatchToProps = (dispatch) => ({
  getSwiper () {
    dispatch(actionCreators.getSwiperData())
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Swiper))
