import React, {Component} from 'react';
import AppHeader from '../app-header/appHeader';
import SearchPanel from '../search-panel/searchPanel';
import PostFilter from '../post-status-filter/postFilter';
import PostList from '../post-list/postList';
import PostAddForm from '../post-add-form/postAddForm';

import './app.css';

export default class App extends Component {

    constructor(props){
        super(props);

        this.state = {
             data : [
                // 4,
                // {},
                {label: "going learn React", important : false, id: 1},
                {label: "Start right now", important : true, id: 11},
                {label: "Just do it", important : false, id: 111}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
    }

    deleteItem(id){
        this.setState(({data}) => {
            const nData = data.filter((item) => item.id !== id)
            return {
                data : nData
            }
        })
    }

    generateId() {
        let newId = +Math.floor(new Date(), 16);
        return newId
    }

    addPostText(e) {
        let text = e.target.value;

        console.log(text);

    }

    addItem(body) {
        this.setState(({data}) => {
            const newPost = {
                label: body,
                important: false,
                id: this.generateId()
            }
            const newData = [...data, newPost]

            return {
                data: newData
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppHeader />
                <div className="search-panel d-flex">
                    <SearchPanel />
                    <PostFilter />
                    
                </div>
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem} 
                />
                <PostAddForm 
                    addItem={this.addItem}
                    addPostText={this.addPostText}
                />
            </div>
        )
    }
}