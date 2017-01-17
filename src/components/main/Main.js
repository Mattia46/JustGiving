import React, { Component } from 'react';
import api from './../../Service/api';
import Donors from './../Donators/Donators';

class Main extends Component {
  constructor(){
    super()
    this.state = {
      obj: {}
    }
  }

  componentWillMount(){
    var data = api.getData(183092)
      .then(json => {
        this.setState({obj: json})
      })
  }

  render(){
    return(
      <div>
        <div>
          <h1>{ this.state.obj.name }</h1>
          <img src={ this.state.obj.logoAbsoluteUrl } />
          <h3>{ this.state.obj.description }</h3>
          <h3>{ this.state.obj.impactStatementWhy }</h3>
        </div>
        <div>
          <Donors props={this.state.obj.donationDisplayAmounts} />
        </div>
      </div>
    )
  }
}

export default Main;
