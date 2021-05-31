import React, {Component} from 'react';
import './SearchBox.css';
class SearchBox extends Component{
    
    render(){
        return(
            <input onChange={(e)=>{this.props.onInputHandle(e)}} class="search-box" type="text" placeholder="search monsters"/>
        )
    }
}

export default SearchBox;