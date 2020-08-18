import React, {Component} from 'react';
import './post-status-filter.css';


export default class PostFilter extends Component{
    constructor(props){
        super(props);

        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Like'},
        ]
    }

    render(){

        const buttons = this.buttons.map(({name,label}) => {
            const active = this.props.filter === name;
            const classStyle = active ? 'btn-info' : 'btn-outline-secondary'
            return(
                <button 
                    onClick={() => this.props.onFilterPosts(name)}
                    key={name} 
                    type="button" 
                    className={`btn ${classStyle}`}
                    >{label}</button>
            )
        })
        return (
            <div className="btn-group">
                {buttons}
    
            </div>
        )
    }
}

