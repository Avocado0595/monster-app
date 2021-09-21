import React, { Component } from 'react';
import {MonsterList} from './monsterList/MonsterList';
import SearchBox from './SearchBox';

class MainComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      monsters: [], searchValue:''
    }
  }
  onInputHandle = (e)=>{
    this.setState({searchValue:e.target.value});
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(respone => respone.json())
    .then(users => this.setState({monsters: users}))
  }
  render(){
    return(
      <>
              <SearchBox onInputHandle = {this.onInputHandle}/>
              <MonsterList monsters = {this.state.monsters} searchValue = {this.state.searchValue}/>
      </>
    )
  }
}

export default MainComponent;