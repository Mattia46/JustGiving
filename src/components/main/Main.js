import React, { Component } from 'react';
import api from './../../Service/api';
import Donors from './../Donors/Donors';
import Footer from './../Footer/Footer';

class Main extends Component {
  constructor(){
    super()
    this.state = {
      obj: {},
      ready: false
    }
  }

  componentDidMount(){
    api.getData(183092)
      .then(json => {
        this.setState({obj: json, ready: true})
      })
  }

  render(){
    if(!this.state.ready){
      return <div className="loading">Loading...</div>
    } else {
      return(
        <div className='mainDiv'>
          <div className="leftSide">
            <h1>{ this.state.obj.name }</h1>
            <div>
              <img src={ this.state.obj.logoAbsoluteUrl } />
              <div className="description">
                <div>{ this.state.obj.description }</div>
                <hr/>
                <p>{ this.state.obj.impactStatementWhy }</p>
              </div>
            </div>
          </div>
          <div className="rightSide" >
            <Donors donors={this.state.obj.donationDisplayAmounts} />
          </div>
          <div className='footer'>
            <Footer website={this.state.obj.websiteUrl} profile={this.state.obj.profilePageUrl} />
          </div>
      </div>
      )
    }
  }
}

export default Main;
