import React from 'react';
import AppHeader from '../app-header/appHeader';
import SearchPanel from '../search-panel/searchPanel';
import PostFilter from '../post-status-filter/postFilter';
import PostList from '../post-list/postList';
import PostAddForm from '../post-add-form/postAddForm';

import './app.css';

const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostFilter />
                
            </div>
            <PostList />
            <PostAddForm />
        </div>
    )
}
export default App;