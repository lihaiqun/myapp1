import React from 'react';
// import { Link } from 'react-router-dom';
// const Com = ( { prolist }) => (
  // <ul className = "prolist">
  //   {
  //     prolist.map(item => (
  //       <li key = { item.id }>
  //       <Link to = { "/detail/" + item.id }>{ item.title }</Link>
  //       </li>
  //     ))
  //   }
  // </ul>
// )

// const Com = (props) => {
//   return (
//     <ul className = "prolist">
//       {
//         props.prolist.map(item => (
//           <li key = { item.id }>
//             <Link to = { "/detail/" + item.id }>{ item.title }</Link>
//           </li>
//         ))
//       }
//     </ul>
//   )
// }

class Com extends React.Component {
  goDetail (id) {
    console.log(this.props)
    this.props.history.push('/detail/' + id)
  }
  render () {
    return (
      <ul className = "prolist">
        {
          this.props.prolist.map(item => {
            return (
              <li key = { item.id } onClick = { this.goDetail.bind(this, item.id) }>
                <img src = { item.images.small } alt = "" />
                <span>{ item.title }</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
export default Com;