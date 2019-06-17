import React from 'react';
class Com extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    console.log(this.props)
    const { id } = this.props.match.params
    fetch('http://www.daxunxun.com/detail?id='+id).then(res => res.json()).then(data => {
      console.log(data)
      this.setState({
        data: data[0]
      })
    })
  }
  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header" onClick = { () => (this.props.history.go(-1)) }>detail header</header>
          <div className = "content">
            <h4>{ this.state.data.title }</h4>
            {/* <span>{ this.state.data.images.small }</span> */}
          </div>
        </div>
        <footer className = "footer">detail</footer>
      </div>
    )
  }
}

export default Com;
