import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }
  render() {

    let postList = () => {

    };


    return (
      <div className="App">
        <h1>Reddit SN Stalk</h1>
        <input type="input" placeholder="user sn"></input>
        <input type="submit" value="Submit"/>

      </div>
    );
  }
}

export default App;
