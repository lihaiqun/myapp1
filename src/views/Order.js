import React from 'react';
class Com extends React.Component {
  render () {
    return (
      <div className = "container">
        <div className = "box">
          <header className = "header">order header</header>
          <div className = "content">order content</div>
        </div>
        <footer className = "footer">order</footer>
      </div>
    )
  }
}

export default Com;
