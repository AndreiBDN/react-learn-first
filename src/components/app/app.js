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
                {label: "going learn React", important : false, like: false, id: 1},
                {label: "Start right now", important : true, like: false, id: 11},
                {label: "Just do it", important : false, like: false, id: 111}
            ],
            term:'',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleLike = this.onToggleLike.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
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
                like: false,
                id: this.generateId()
            }
            const newData = [...data, newPost]

            return {
                data: newData
            }
        })
    }

    toggle(id, type){
        this.setState(({data}) => {
            let newArr = data.map(item => {
                if(item.id === id){
                    let n = item;
                    if(type === 'important'){
                        n.important = !n.important
                    } else {
                        n.like = !n.like
                    }
                    return n                    
                } else {
                    return item
                }
            })
            return {
                data: newArr
            }
        })
    }
    
    onToggleImportant(id){

        this.toggle(id, 'important')

    }
    
    onToggleLike(id){
        this.toggle(id, 'like')

    }
    searchPosts(posts, term){
        if(term.length === ''){
            return posts
        }
        return posts.filter(item => {
            return item.label.indexOf(term) > -1;
        })
    }

    onSearch = (term) => {
        this.setState({
            term: term
        })
    }

    filterPosts(posts, filter){
        if(filter === 'like'){
            return posts.filter(item => item.like)
        }else{
            return posts
        }
    }
    onFilterPosts = (filter) => {
        this.setState({filter})
    }

    render(){

        const {data, term, filter} = this.state;

        const likedPosts = data.filter(item => item.like).length;
        const allPosts = data.length;

        const searchText = this.filterPosts(this.searchPosts(data, term) , filter);

        return (
            <div className="app">
                <AppHeader 
                    likedPosts={likedPosts}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel 
                        onSearch={this.onSearch}
                    />
                    <PostFilter
                        filterPosts={this.filterPosts}
                        filter={filter}
                        onFilterPosts={this.onFilterPosts}
                    />
                    
                </div>
                <PostList 
                    posts={searchText}
                    onDelete={this.deleteItem} 
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm 
                    addItem={this.addItem}
                />
            </div>
        )
    }
}