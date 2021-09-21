
import './App.css';
import React, { Component } from 'react';
import MainComponent from './components/MainComponent';
class App extends Component {
  componentDidUpdate(){
    console.log('update');
  }
  render(){
    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <MainComponent/>
      </div>

    )
  }
}

export default App;
