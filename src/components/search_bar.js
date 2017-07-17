import React from 'react';

class SearchBar extends React.Component{
	constructor(){
		super();
		this.state = {
			term:''
		}
	}

	render(){
	
	return (
		<div class='search-bar'>
		
		<input 
		value = {this.state.term}
		onChange = {(event) => this.onInputChange(event.target.value)}
		placeholder='type here to search'/>
	    
		</div>
		);
  }
  onInputChange(term){
  	 this.setState({term});
  	 this.props.onSearchTermChange(term);
  }
}
export default SearchBar;
