import React from 'react';

import './app-header.css';

const AppHeader = ({likedPosts, allPosts}) => {
    return(
        <div className="app-header d-flex">
            <h1>Andrei Balashov</h1>
            <h2>{allPosts} notes, {likedPosts} likes</h2>

        </div>
    )
}
export default AppHeader;