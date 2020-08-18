import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    constructor(props){
        super(props);

        this.state = {
            term: ''
        }
    }

    onSearch = (e) => {
        this.setState({
            term: e.target.value
        })
        this.props.onSearch(e.target.value)
    }
   render() {
    return(
        <input
            onChange={this.onSearch}
            className="form-control search-input" 
            type="text" 
            placeholder="Searching"
        />
    )
   }
}
