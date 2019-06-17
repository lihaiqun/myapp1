import React from 'react';
import { Carousel } from 'antd-mobile';

class Com extends React.Component {
  render() {
    return (
      <Carousel
        autoplay = { true }
        infinite
      >
        {this.props.bannerlist.map((val, index) => (
          <a
            key={index}
            href="http://www.daxunxun.com.banner"
            style={{ display: 'inline-block', width: '100%', height: 176 }}
          >
            <img
              src={"http://www.daxunxun.com" + val}
              alt=""
              style={{ width: '100%', verticalAlign: 'top', height: 176 }}
            />
          </a>
        ))}
      </Carousel>
    )
  }
}
export default  Com;