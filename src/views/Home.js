import React from 'react';
import Prolist from '@/components/common/Prolist';
import Banner  from '@/components/common/Banner';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: [],
      bannerlist: []
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      console.log(this.state)
      this.setState({
        prolist: data
      })
    })
    fetch('http://www.daxunxun.com/banner').then(res => res.json()).then(data => {
      console.log(this.state)
      this.setState({
        bannerlist: data
      })
    })
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">home header</header>
        <div className = "content">
          <Banner bannerlist = { this.state.bannerlist }/>
          <Prolist prolist = { this.state.prolist } { ...this.props }/>
        </div>
      </div>
    )
  }
}

export default Com;
