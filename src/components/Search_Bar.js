import React, {Component} from 'react'

class SearchBar extends Component {
        constructor(props){
            super(props);
            this.state = {
                term: '',
            }
        }
        render(){
        return(
            <div className="search-top-bar">
                  
                 <input onChange={event => 
                //this.setState({term: event.target.value})}
                this.onInputChange(event.target.value)
                 }
                 />
               </div>
        );
    }
    
    onInputChange(term){
        // Set the term
        // Call back from index
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;