import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main';


class App extends Component {
  render(){
    return(
      <p>Hello</p>
    )
  }
}

ReactDOM.render (
  <Main />,
  document.getElementById('app')
)
