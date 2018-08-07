import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    users: null,
    active: false
  };
  handleClick = () => {
    fetch("https://api.github.com/users/NicholasB85")
    .then(res => res.json())
    .then(data => {
      this.setState({users: data, active: true})
    })
  }
  render() {
    return (
      <button onClick={this.handleClick}>button</button>

    );
  }
}

export default App;
