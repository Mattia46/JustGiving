import React, { Component } from 'react';
import api from './../../Service/api';

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
        <h1>{ this.state.obj.name }</h1>
        <img>{ this.state.obj.logo }</img>
        <h3>{ this.state.obj.description }</h3>
        <h3>{ this.state.obj.impactStatementWhy }</h3>
        </div>
    )
  }
}

export default Main;
