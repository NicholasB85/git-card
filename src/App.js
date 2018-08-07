import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  handleClick = () => {
    console.log("the button was clicked")
  }
  render() {
    return (
      <button onClick={this.handleClick}>button</button>

    );
  }
}

export default App;
