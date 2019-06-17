import React from 'react';
import Prolist from '@/components/common/Prolist';
class Com extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      prolist: []
    }
  }
  componentDidMount () {
    fetch('http://www.daxunxun.com/douban').then(res => res.json()).then(data => {
      console.log(this.state)
      this.setState({
        prolist: data
      })
    })
  }
  render () {
    return (
      <div className = "box">
        <header className = "header">home header</header>
        <div className = "content">
          <Prolist prolist = { this.state.prolist } { ...this.props }/>
        </div>
      </div>
    )
  }
}

export default Com;
