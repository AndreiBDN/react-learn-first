import React, {Component} from 'react';

import './post-add-form.css'

export default class PostAddForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            text: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {

        this.setState({
           text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.addItem(this.state.text)
        this.setState({
            text:''
        })
    }

    render() {
        return(
            <form 
            onSubmit={this.onSubmit}
            className="bottom-panel d-flex">
                <input 
                    onChange={this.onChange}
                    value={this.state.text}                    
                    type="text"
                    placeholder="What are you thinking about?"
                    className="form-control new-post-label"
                />
                <button
                type="submit" 
                className="btn-outline-secondary">
                    Add note
                </button>
            </form>
        )
    }
}
