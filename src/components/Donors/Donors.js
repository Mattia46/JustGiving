import React, { Component } from 'react';

class Donors extends Component {
  render(props){
    let supporters = this.props.donors.map(donor => {
      return <Supporter donor={donor} key={donor.name} />
    })
    let totAmount = this.props.donors.map(donor => {
      return donor.amount
    }).reduce((a, b) => {
      return a + b;
    })

    return(
      <div>
        <h2>Total found raised £ { totAmount }</h2>
        <div>{ supporters }</div>
      </div>
    )
  }
}

const Supporter = (props) => (
    <div>
      <span> Donor: { props.donor.name } </span>
      <h4> { props.donor.description } </h4>
    </div>
)

export default Donors;
