import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import {MonsterList} from './components/monsterList/MonsterList';
import SearchBox from './components/SearchBox';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      monsters: [], searchValue:''
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respone => respone.json())
    .then(users => this.setState({monsters: users}))
  }
  onInputHandle = (e)=>{
    this.setState({searchValue:e.target.value});
  }
  render(){
    const {monsters, searchValue} = this.state;

    return(
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox onInputHandle = {this.onInputHandle}/>
        <MonsterList monsters = {monsters.filter(monster=> monster.name.toLowerCase().includes(searchValue))}/>
      </div>

    )
  }
}

export default App;